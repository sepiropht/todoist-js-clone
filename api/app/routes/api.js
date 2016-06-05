var User = require('../models/user');
var config = require('../../config');
var secretKey = config.secretKey;
var jsonwebtoken = require('jsonwebtoken');
var Story = require('../models/story');


function createToken(user) {
    var token = jsonwebtoken.sign({
        _id: user._id,
        name: user.name,
        username: user.username
    }, secretKey, {
        expiresIn: 1440
    });
    return token;
}
module.exports = function(app, express) {
    var api = express.Router();
    api.post('/signup', function(req, res) {
        var user = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        });
        user.save(function(err) {
            if (err) {
                res.send(err);
                return;
            }
            res.json({
                message: 'User has been created!'
            });
        })
    });

    api.get('/getAllUser', function(req, res) {
        User.find({}, function(err, users) {
            if (err) {
                res.send(err);
                return;
            }
            res.send(users);
        })
    });

    api.post('/login', function(req, res) {
        User.findOne({
            username: req.body.username
        }).select('password').exec(function(err, user) {
            if (err) throw err;
            if (!user) {
                res.send({
                    message: "User doesn' exist"
                });
            } else if (user) {
                var validPassword = user.comparePassword(req.body.password);

                if (!validPassword) {
                    res.send({
                        message: "Invalid Password"
                    });
                } else {
                    //token
                    var token = createToken(user);
                    res.json({
                        success: true,
                        message: 'Successfuly login!',
                        token: token
                    });
                }
            }
        })
    })

    api.use(function(req, res, next) {
        console.log("somebody just came to our app!");
        var token = req.body.token || req.headers['x-access-token'];
        if (token) {
            jsonwebtoken.verify(token, secretKey, function(err, decoded) {
                if (err) {
                    res.status(403).send({
                        success: false,
                        message: 'Failed'
                    })
                } else {
                    req.decoded = decoded;
                    next();
                }
            })
        } else {
            res.status(403).send({
                success: false,
                message: 'No token Provided'
            })
        }
    });


    api.route('/')
        .post(function(req, res) {
            var story = new Story({
                creator: req.decoded.id,
                content: req.body.content
            })
            story.save(function(err) {
                if (err) {
                    res.send(err);
                    return;
                }
                res.json({
                    message: "New story Created"
                });
            });
        })

    .get(function(req, res) {
        Story.find({
            creator: req.decoded.id
        }, function(err, stories) {
            if (err) {
                res.send(err);
                return;
            }
            res.send(stories);
        });
    });

    api.get('/me', function (req, res) {
      res.json(req.decoded);
    });
    return api;
}

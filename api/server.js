var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config');
var app = express();
var mongoose = require ('mongoose');
var port = config.port;


mongoose.connect( config.database, function (err) {
  if(err) {
    console.log(err);
  } else {
    console.log('connect to the database');
  }
})


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname +'/public'));

var api = require('./app/routes/api')(app, express);
app.use('/api', api);

app.use('/js', express.static(__dirname + '/js'));
app.use('/bower_components', express.static(__dirname + '/../bower_components'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/partials', express.static(__dirname + '/partials'));
app.get('*', function(req,res) {
  res.sendFile(__dirname +'/public/index.html');
})


app.listen(port, function (err) {
  if(err) {
    console.log(err);

  } else {
    console.log('Listening on port  ' + port ) ;
  }
});

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

app.get('/todo',express.static(__dirname +'/public'));

var api = require('./app/routes/api')(app, express);
app.use('/api', api);



app.listen(port, function (err) {
  if(err) {
    console.log(err);

  } else {
    console.log('Listening on port  ' + port ) ;
  }
});
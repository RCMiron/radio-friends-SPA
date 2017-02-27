var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./app_server/routes/index');
var userRoute = require('./app_server/routes/user');

var app = express();
mongoose.connect('localhost: 27017/radioFriends');

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', userRoute);
app.use('/', index);

app.use(function(req, res, next) {
  return res.render('index');
});


module.exports = app;

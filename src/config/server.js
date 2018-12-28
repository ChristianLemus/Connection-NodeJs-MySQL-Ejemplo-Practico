var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));

//mdiddleeare
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;
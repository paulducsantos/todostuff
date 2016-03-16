var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');

var app = express();
var db = 'mongodb://localhost/todostuff';

var PORT = process.env.PORT || 3001;

mongoose.connect(db)
var Todo = require('./models/todo');

app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});

app.post('/api/todos', function(req, res) {

});

app.get('/api/todos', function(req, res) {

});

app.put('/api/todos/:id', function(req, res) {

});

app.delete('/api/todos/:id', function(req, res) {

});

app.listen(PORT, function() {
  console.log("listening on port", PORT);
});
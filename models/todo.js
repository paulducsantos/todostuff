var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({

});

module.exports = mongoose.model('Todo', todoSchema);
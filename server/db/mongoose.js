const mongoose = require('mongoose');

// Mongoose is able to use promises like so:
mongoose.Promise = global.Promise;

// This will take a few milliseconds...be mindful.
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://oryulin:qwer4567@ds044577.mlab.com:44577/todos' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};

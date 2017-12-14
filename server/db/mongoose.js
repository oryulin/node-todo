const mongoose = require('mongoose');

// Mongoose is able to use promises like so:
mongoose.Promise = global.Promise;

// This will take a few milliseconds...be mindful.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
//mongodb://oryulin:qwer4567@ds044577.mlab.com:44577/todos

console.log('Connecting to database:',process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp')

module.exports = {mongoose};

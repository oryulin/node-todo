const mongoose = require('mongoose');

// Mongoose is able to use promises like so:
mongoose.Promise = global.Promise;

// This will take a few milliseconds...be mindful.
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://oryulin:qwer4567@ds139446.mlab.com:39446/todoapp', {
  useMongoClient: true
});
//mongodb://<dbuser>:<dbpassword>@ds139446.mlab.com:39446/todoapp

// console.log('Connecting to database:',process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp')

module.exports = {mongoose};

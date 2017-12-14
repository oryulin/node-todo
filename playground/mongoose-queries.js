const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// // Validating if an id is valid:
// if(!ObjectID.isValid(_id)) {
//   console.log('ID not valid.');
// }

// //This returns as array.
// Todo.find({_id}).then((todos) => {
//   console.log('Todos:', todos)
// });
//
// //This returns the document.
// Todo.findOne({_id}).then((todo) => {
//   console.log('Todo:', todo);
// });

//Returns a document and is simple due to by finding directly by id, not object
Todo.findById('5a32c661a7f8856220614b0d').then((todo) => {
  // If you find by an id that doesnt exist, you have to add if statement:
  if(!todo) {
    return console.log('ID not found.');
  }
  console.log('Todo by ID:', todo);
}).catch((e) => console.log(e));
// catches if the id is in error

//-----------------------------------------------------------------------------

User.findById('5a32adfb9953c2ac38d03ed4').then((user) => {
  if(!user) {
    return console.log('ID not found');
  }
  console.log('User:', user);
}).catch((e) => console.log(e));

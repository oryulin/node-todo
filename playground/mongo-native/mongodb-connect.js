// const MongoClient = require('mongodb').MongoClient;

// Destructured:
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// //destructuring:
// var user = {
//   name: "ory",
//   age: 33
// };
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log("Unable to connect to the MongoDB server.");
  }
  console.log("Successfully connected to the MongoDB server.");

  db.collection('Todos').insertOne({
    text: "eat lunch",
    completed: false
  }, (err, res) => {
    if (err) {
      return console.log("Unable to insert a document into the collection.");
    }
    console.log("Successfully added a document into the collection.");
    console.log(JSON.stringify(res.ops, undefined, 2));
  });

  // db.collection('Users').insertOne({
  //   // _id: 123,
  //   name: "oryulin",
  //   age: 33,
  //   location: "Oklahoma"
  // }, (err, res) => {
  //   if(err) {
  //     return console.log("Unable to add document to collection.");
  //   }
  //   console.log(JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2));
  // })

  db.close();
});

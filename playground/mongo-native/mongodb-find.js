const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log("Unable to connect to the MongoDB server.");
  }
  console.log("Successfully connected to the MongoDB server.");

  db.collection('Users').find({
    name: "mike"
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  // db.collection('Todos').find({
  //   completed: false
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch Todos", err);
  // });

  // db.collection('Todos').find({
  //   _id: new ObjectID("5a31878bd86a8a3374dff872")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log("Unable to fetch Todos", err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log("Todos:", JSON.stringify(count, undefined, 2));
  }, (err) => {
    console.log("Unable to fetch Todos", err);
  });

  db.close();
});

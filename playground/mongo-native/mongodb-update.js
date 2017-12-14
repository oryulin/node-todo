const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log("Unable to connect to the MongoDB server.");
  }
  console.log("Successfully connected to the MongoDB server.");

  // //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a3174ef45d7f1157431eafc")
  // }, {
  //   $set: {
  //     completed: false
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {
  //   console.log(res);
  // });


  db.collection('Users').findOneAndUpdate({
    name: "adam"
  }, {
    $set: {name: "ory"},
    $inc: {age: 1}
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });

  db.close(() => {
    console.log("Closed connection to the database.")
  });
});

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log("Unable to connect to the MongoDB server.");
  }
  console.log("Successfully connected to the MongoDB server.");

  // //deletemany
  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((res) => {
  //   console.log(res);
  // }, (err) => {
  //  console.log(err);
  //});

  // //deleteone
  // db.collection('Todos').deleteOne({text: "eat lunch"}).then((res) => {
  //   console.log(res.result);
  // }, (err) => {
  //   console.log(err);
  // });

  // //findoneanddelete
  // db.collection('Todos').findOneAndDelete({text: "eat lunch"}).then((res) => {
  //   console.log(res);
  // });

  db.close(() => {
    console.log("Closed connection to the database.")
  });
});

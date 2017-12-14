const express = require('express');
const bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

//This allows us to send JSON to our body
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the main page.')
})

//CRUD - create read update delete
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.status(200).send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send("Invalid id.")
  }

  Todo.findById(req.params.id).then((todo) => {
    if(!todo) {
      return res.status(404).send("ID does not exist.");
    }
    res.status(200).send({todo});
  }, (err) => {
    res.status(404).send(err);
  });
});

app.listen(3000, () => {
  console.log(`Started on port ${port}`)
});

module.exports = {app};

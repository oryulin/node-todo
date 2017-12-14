const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {User} = require('./../models/user');

const todos = [{
  text: "test1"
  //first object
}, {
  text: "test2"
  //second object
}];

// This deletes all items in the database before utilizing the test cases:
beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  describe('Posting valid data', () => {
    it('should create a new todo', (done) => {
      var text = 'placeholder';

      request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
          expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
          if(err) {
            return done(err);
          }

          Todo.find({text}).then((todos) => {
            expect(todos.length).toBe(1);
            expect(todos[0].text).toBe(text);
            done();
          }).catch((e) => done(e));
        })
    });
  });

  describe('Posting invalid data', () => {
    it('should not create document due to invalid body data', (done) => {
      request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
          if(err) {
            return done(err);
          }

          Todo.find().then((todos) => {
            expect(todos.length).toBe(2);
            done();
          }).catch((e) => done(e));
        });
    });
  });
});

describe('GET /todos', () => {
  describe('Gathering all todos', () => {
    it('should retrieve all todos from the database', (done) => {
      request(app)
        .get('/todos')
        .send()
        .expect(200)
        .expect((res) => {
          expect(res.body.todos.length).toBe(2);
        })
        .end(done());
    })
  });
});

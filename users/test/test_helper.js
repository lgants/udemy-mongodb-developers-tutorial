const mongoose = require('mongoose');

// global.Promise is the ES6 implementation of promise
mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/users_test');
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

// done is a callback for mocha that tells it to run the next test
beforeEach((done) => {
  // mongo cannot drop tables asynchronously
  // use lowercase 'blogposts' because mongo normalizes each collection name by lowercasing
  const { users, comments, blogposts } = mongoose.connection.collections
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
});

// mongoose.connection.collections.users.drop(() => {

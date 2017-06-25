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

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
  // done is a callback for mocha that tells it to run the next test
  done();
  });
});

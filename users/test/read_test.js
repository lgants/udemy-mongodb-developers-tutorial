const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
  let joe;

  beforeEach((done) => {
    // joe is given an id property even before joe is saved to db
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('finds all users with a name of joe', (done) => {
    User.find({ name: 'Joe' })
      .then((users) => {
        assert(users[0]._id.toString() === joe._id.toString());
        done();
      });
  });

  it('finds a user with a particular id', (done) => {
    // mongoose always expects passing in an object
    User.findOne({ _id: joe._id })
      .then((user) => {
        assert(user.name === 'Joe');
        done();
      });
  });
});

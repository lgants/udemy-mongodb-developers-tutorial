const assert = require('assert');
const request = require('supertest');
const app = require('../app');

// tpyical use for supertest library
describe('the express app', () => {
  it('handles a GET request to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        assert(response.body.hi === 'there');
        done();
      });
  });
});

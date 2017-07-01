const assert = require('assert');
const User = require('../src/user');
const BlogPost = require('../src/blogPost');


describe('middleware', (done) => {

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    blogPost = new BlogPost({ title: 'JS is great', content: 'Trust us'});

    joe.blogPosts.push(blogPost);

    Promise.all([joe.save(), blogPost.save()])
      .then(() => done());
  });

  it('users clean up dangling blogposts on remove', (done) => {
    // BlogPost.count() is an async operation since it needs to hit db, so need to chain another then
    joe.remove()
      .then(() => BlogPost.count())
      .then((count) => {
        assert(count === 0);
        done();
      });
  });


});

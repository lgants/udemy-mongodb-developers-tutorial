const assert = require('assert');
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');

describe('associations', () => {
  let joe, blogPost, comment;

  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    blogPost = new BlogPost({ title: 'JS is great', content: 'Trust us'});
    comment = new Comment({ content: 'Congrats on great post' });

    // mongoose will recognize pushing in an entire model and automatically creates that association despite the association using objectId
    joe.blogPosts.push(blogPost);
    blogPost.comments.push(comment);
    // mongoose magic provides a setter on this assignment 
    comment.user = joe;
  });

})
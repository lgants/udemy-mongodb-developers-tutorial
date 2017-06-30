const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// comments uses a configuration object inside an array
// ref is matched up against the model definition
const BlogPostSchema = new Schema({
  title: String,
  content: String,
  comments: [{
    type: Schema.Type.ObjectId,
    ref: 'comment'
  }]
})

const BlogPost = mongoose.model('blogPost', BlogPostSchema);

module.exports = BlogPost;

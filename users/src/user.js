const PostSchema = require('./post');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// deleted 'postCount: Number' because it was moved to a virtual property and therefore not defined in the schema; instead, it is defined as seperate declerations on the schema
const UserSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  posts: [PostSchema],
  likes: Number,
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'blogPost'
  }]
});

// when accessing 'joe.postCount' it is essentially running a function even though there were no parantheses
// need to use keyword function (i.e. not fat arrow) so 'this' context is the current model instance
UserSchema.virtual('postCount').get(function(){
  return this.posts.length;
});

const User = mongoose.model('User', UserSchema);

module.exports=User

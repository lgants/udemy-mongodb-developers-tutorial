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
  posts: [PostSchema]
});

// when accessing 'joe.postCount' it is essentially running a function even though there were no parantheses 
UserSchema.virtual('postCount').get(function(){

});

const User = mongoose.model('User', UserSchema);

module.exports=User

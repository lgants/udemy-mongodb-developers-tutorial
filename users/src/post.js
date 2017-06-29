const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String
});

// didn't create a model because this won't map to a distinct collection of posts inside the mongo database

module.exports = PostSchema;

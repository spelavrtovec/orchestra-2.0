const mongoose = require('mongoose');
const User = require("../models/User");
const Post = require("../models/Post");
const { Schema } = mongoose;

const replySchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  _post: { type: Schema.Types.ObjectId, ref: "Post" },
  text: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }  
});

const Reply = mongoose.model('Reply', replySchema);
module.exports = Reply;
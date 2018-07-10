const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  text: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }  
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;

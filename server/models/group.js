const mongoose = require('mongoose');

const { Schema } = mongoose;

const groupSchema = new Schema({
  _members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  name: String,
  place: String,
  fileUrl: String,
  info: String,
  files: Array,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
 });

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;

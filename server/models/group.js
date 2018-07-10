const mongoose = require('mongoose');

const { Schema } = mongoose;

const groupSchema = new Schema({
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
  name: String,
  place: String,
  info: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
 });

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;

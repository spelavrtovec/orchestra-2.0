const mongoose = require('mongoose');
const User = require("../models/User");
const Post = require("../models/Post");
const { Schema } = mongoose;

const groupSchema = new Schema({
  _users: { type: Schema.Types.ObjectId, ref: "User" },
  name: String,
  place: String,
  info: String,
  _posts: { type: Schema.Types.ObjectId, ref: "Post" },
 });

const Group = mongoose.model('Group', groupSchema);
module.exports = Group;

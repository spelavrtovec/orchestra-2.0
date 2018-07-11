var express = require("express");
const Post = require("../models/post");

const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../configs/index");

var router = express.Router();

//to create a new post in a group
router.post(
  "/:groupId/post",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let groupId = req.params.groupId;
    let { text } = req.body;
    let _user = req.user._id;

    const data = { text, _user };

    Post
    .create(data)
    .then(post => {
        res.json({
          success: true,
          post
        });
      })
    .catch(error => next(error));

    Group
    .findByIdAndUpdate(groupId, { $push: { posts:  post } })
    .then(() =>{
      Group
      .save()
      .then((group) => {
          console.log(group)
      })
  })
});

//to delete a post:
router.delete(
  "/:id",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    Post
    .findByIdAndRemove(req.params.id)
      .then(post => {
        res.json({
          success: true,
          post
        });
      })
      .catch(error => next(error));
  }
);


//to post a file in a group
router.post(':groupId/file', parser.single('file'), (req, res, next) => {
  console.log('DEBUG req.file', req.file);
  Group
  .findOneAndUpdate(groupId, { fileUrl: req.file.url })
    .then(() => {
      res.json({
        success: true,
        fileUrl: req.file.url
      })
    })
});

module.exports = router;

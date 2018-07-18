var express = require("express");
const Post = require("../models/post");

const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../configs/index");
const Group = require("../models/group");
var router = express.Router();

const uploadCloud = require("../configs/cloudinary");

//to create a new post in a group
router.post(
  "/:groupId/post",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let _group = req.params.groupId;
    let { text } = req.body;
    let _user = req.user._id;
    
    const data = { text, _user, _group };

    if (req.body.text === "" ) {
      res.json({
        success: false, 
      });
    }
    else {
    Post
    .create(data)
      .then(post => {
        Group
        .findByIdAndUpdate(
          _group,
          { $push: { posts: post } },{ new: true })
          .then((post) => {
            return res.json({
              success: true,
              post
            });
          })
      })
      .catch(error => next(error));
    }
  }
);

//to delete a post:
router.delete(
  "/:postId",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let postId = req.params.postId;

    Post
    .findByIdAndRemove(postId)
      .then(post => {
        res.json({
          success: true,
          post
        });
      })
      .catch(error => next(error));
  }
);

// to post a reply to a certain post
router.post(
  "/:postId/reply",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let postId = req.params.postId;
    let text = req.body.text;
    let _user = req.user._id;

    const data = { text, _user };

    if (req.body.text === "" ) {
      res.json({
        success: false, 
      });
    }
    else {
    Post
      .findByIdAndUpdate(postId, { $push: { replies: data } }, { new: true })
        .then(post => {
          return res.json({
            success: true,
            post
          });
        })
      .catch(error => next(error));
    }
  }
);

//to post a file to a certain group
router.post(
  "/:groupId/file",
  [uploadCloud.single("file"), passport.authenticate("jwt", config.jwtSession)],
  (req, res, next) => {

    let groupId = req.params.groupId;
    let fileUrl = req.file.url;
    Group
    .findByIdAndUpdate(
      groupId,
      { $push: { _files: fileUrl } },
      { new: true }
    ).then(group => {
      return res.json({
        success: true,
        group
      });
    });
  }
);

module.exports = router;

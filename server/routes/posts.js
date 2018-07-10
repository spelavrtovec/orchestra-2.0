var express = require("express");
const Post = require("../models/post");

const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../configs/index");

var router = express.Router();

// Route to get all posts in a certain group
router.get("/:group", (req, res, next) => { //get the component of the specific group
  Post.find()
    .populate("posts")
    .then(posts => {
      res.json(posts);
    })
    .catch(error => next(error));
});

//to create a new post in a group
router.post(
  "/:group", //post to a specific group component???!!!??
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let { text } = req.body;
    let _user = req.user._id;
    let date = new Date();

    const data = {text, _user, date};
    
    Post.create(data)
      .then(post => {
        res.json({
          success: true,
          post
        });
      })
      .catch(error => next(error));
  }
);

//to delete a post:
router.delete(
  "/:id",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    Post.findByIdAndRemove(req.params.id)
      .then(post => {
        res.json({
          success: true,
          post
        });
      })
      .catch(error => next(error));
  }
);

module.exports = router;

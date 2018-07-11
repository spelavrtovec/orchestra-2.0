var express = require("express");
const Post = require("../models/post");
const Group = require("../models/group");

const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../configs/index");

var router = express.Router();

//to create a new group
router.post("/newgroup", passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
    let { name, place, info, _members } = req.body; //I'm not sure how will I get the inputs from the react form component here
    const data = {name, place, info, _members}

    Group.create(data)
      .then(group => {
        res.json({
          success: true,
          group
        });
      })
      .catch(error => next(error))
  }
);

// Route to display all the happenings in a certain group
router.get("/:groupId", passport.authenticate("jwt", config.jwtSession), (req, res, next) => { //get the component of the specific group
  let groupId = req.params.groupId //something
  Group
    .findById(groupId)
    .populate('_members')
    .populate('posts')
    .populate('_files')
    .then(group => {
      res.json({
        success: true,
        group
      });
    })
    .catch(error => next(error))
});

module.exports = router;

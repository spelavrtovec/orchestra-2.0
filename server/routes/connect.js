var express = require("express");
const Post = require("../models/post");
const User = require("../models/user");
const Group = require("../models/group");

const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../configs/index");

var router = express.Router();

// to create a new group
router.post("/newgroup", passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  console.log("members   ",req.body._members)
    let { name, place, info, _members } = req.body;
    const data = { name, place, info, _members };
    const listMembers = [..._members]

    if (req.body.name === "" || req.body._members === [] || req.body.info === "" ) {
      var message = "One or more of the stuff that you need to put in must be missing."
      res.json({
        success: false, 
        message
      });
    }
    else {
      Group.create(data)
        .then(group => {
          listMembers.forEach(e => {
            User.findByIdAndUpdate(e, {$push: {_groups: group._id}})
            .then(() => console.log("hi"))
          })
                res.json({
                  success: true,
                  group
                });
        })
        
        .catch(error => {
          console.log("por fin")
          next(error)})
    }
    }
);

// to show all the groups of a certain user
router.get("/connect", passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let user = req.user._id;
  console.log("in hereeeee")
  User
  .findById(user)
  .populate('_groups')
  .then(user => {
    res.json({
      success: true,
      user
    });
  })
})

// to display all the happenings in a certain group
router.get("/:groupId", passport.authenticate("jwt", config.jwtSession), (req, res, next) => { //get the component of the specific group
  let groupId = req.params.groupId
  
  Group
  .findById(groupId)
  .populate('_members')
  .populate('posts')
  .populate('_files')
  .then(group => {
    console.log("group", group._id)
      res.json({
        success: true,
        group
      });
    })
    .catch(error => next(error))
});

//to delete a group
router.delete(
  "/:groupId",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let group = req.params.groupId

    Group
    .findByIdAndRemove(group)
      .then(group => {
        res.json({
          success: true,
          group
        });
      })
      .catch(error => next(error));
  }
);

module.exports = router;

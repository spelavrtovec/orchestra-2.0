var express = require("express");
const Post = require("../models/post");
const User = require("../models/user");
const Group = require("../models/group");

const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../configs/index");

var router = express.Router();

// to create a new group
router.post(
  "/newgroup",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let { name, place, info, _members } = req.body;
    const data = { name, place, info, _members };
    const listMembers = [..._members];

    if (
      req.body.name === "" ||
      req.body._members === [] ||
      req.body.info === ""
    ) {
      var message =
        "One or more of the stuff that you need to put in must be missing.";
      res.json({
        success: false,
        message
      });
    } else {
      Group
      .create(data)
        .then(group => {
          listMembers.forEach(e => {
            User
            .findByIdAndUpdate(e, { $push: { _groups: group._id }}, {new: true} )
            .then((updatedUser => {
              console.log(updatedUser);
              res.json({
                success: true,
                group
              });
            }))
          })
          })
        .catch(error => {
          next(error);
        });
    }
  }
);

// to show all the groups of a certain user
router.get(
  "/connect",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let user = req.user._id;

    User.findById(user)
      .populate("_groups")
      .then(user => {
        res.json({
          success: true,
          user
        });
      });
  }
);

// to display all the happenings in a certain group
router.get(
  "/:groupId",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {

    let groupId = req.params.groupId;
    console.log("groupId", groupId)
    Group
    .findById(groupId)
      .populate({ path: "_members", model: "User"})
      .populate({
        path: "posts",
        model: "Post",
        populate: {
          path: "_user",
          model: "User",
        }
      })

      .populate({
        path: "posts",
        populate: {
          path: "replies._user",
        }
      })

      .then(group => {

      
        console.log(group)
        return res.json({
          success: true,
          group
        });
      })
      .catch(error => next(error));
  }
);




//to delete a group
router.delete(
  "/:groupId",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let group = req.params.groupId;

    Group.findByIdAndRemove(group)
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

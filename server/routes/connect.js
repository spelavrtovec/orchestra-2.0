var express = require("express");
const Post = require("../models/post");
const Group = require("../models/group");

const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../configs/index");

var router = express.Router();

// to create a new group
router.post("/newgroup", passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
    let { name, place, info, _members } = req.body; 

    const data = { name, place, info, _members }
    console.log("dataaaa", data)

    if (req.body.name === "" || req.body._members === [] || req.body.info === "" ) {
      var message = "One or more of the stuff that you need to put in must be missing."
      console.log("adios")
      res.json({
        success: false, 
        message
      });
    }
    else {
      Group.create(data)
        .then(group => {
          console.log("hola")
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

// to display all the happenings in a certain group
router.get("/:groupId", passport.authenticate("jwt", config.jwtSession), (req, res, next) => { //get the component of the specific group
  let groupId = req.params.groupId

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

// to show all the groups of a certain user
router.get("/connect", passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
  let user = req.user._id;

  User
  .findById(user)
  .populate('_groups')
  .then(groups => {
    res.json({
      success: true,
      groups
    });
  })
})

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

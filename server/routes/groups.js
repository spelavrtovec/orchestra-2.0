var express = require("express");
const Post = require("../models/post");
const Group = require("../models/group");

const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../configs/index");

var router = express.Router();

router.post("/newgroup", passport.authenticate("jwt", config.jwtSession), (req, res, next) => {
    let { name, place, info, members } = req.body; //I'm not sure how will I get the inputs from the react form component here
    const data = {name, place, info, members}

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

module.exports = router;

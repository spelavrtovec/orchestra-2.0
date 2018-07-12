const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const config = require('../configs');
const uploadCloud = require("../configs/cloudinary");


// to get all members
router.get('/', (req, res, next) => {
  User
  .find('isPublic: true')
  .select({
    'name': 1,
    'pictureUrl': 1,
    'bio': 1,
    'myRole': 1,
  })
    .then(users => {
      res.json(
        users
      )
    })
});

// getting the profile of the current user
router.get(
  "/profile",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
  let profile = req.user._id;
  User
    .findById(profile)
    .select({
      'name': 1,
      'pictureUrl': 1,
      'bio': 1,
      'myRole': 1,
      'role': 1,
    })
    .then(user => {
      res.json(
        user
      )
    })
});

// Route to add a picture on one user with Cloudinary
// To perform the request throw Postman, you need
// - Endpoint: POST http://localhost:3030/api/users/:profile/picture
// - Select: Body > form-data
// - Put as key: picture (and select "File")
// - Upload your file
// To perform the request in HTML:
//   <form method="post" enctype="multipart/form-data" action="http://localhost:3030/api/users/:profile/picture">
//     <input type="file" name="picture" />
//     <input type="submit" value="Upload" />
//   </form>


//for changing the profile info
router.post('/:profile/change', [ uploadCloud.single("file"), passport.authenticate("jwt", config.jwtSession) ], (req, res, next) => {
  let profile = req.user._id;
  const { email, name, password, bio, myRole } = req.body;
  const pictureUrl = req.file.url;

  let user = { email, name, password, bio, myRole, pictureUrl }
  
  User
  .findByIdAndUpdate(profile, user, { new: true })
  .then(() => {
    res.json({
      success: true,
      profile
    })
  })

});

module.exports = router;
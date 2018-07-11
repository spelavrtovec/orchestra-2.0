const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const config = require('../configs');

const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'my-images',
  allowedFormats: ['jpg', 'png', 'gif'],
});

const parser = multer({ storage });


// Route to get all members
router.get('/', (req, res, next) => {
  User.find('role: MEMBER')
    .then(users => {
      res.json(users)
    })
});

//creating his/her profile when he/she signs up
router.post(
  "/user",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let { name, pictureUrl, bio, myRole } = req.body;
    const data = { name, pictureUrl, bio, myRole }

    User.create(data)
      .then(user => {
        res.json({
          success: true,
          user
        });
      })
      .catch(error => next(error))
});

//getting the profile of the current user
router.get(
  "/profile",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
  let profile = req.user._id;
  Profile
    .findById(profile) 
    
});

// Route to add a picture on one user with Cloudinary
// To perform the request throw Postman, you need
// - Endpoint: POST http://localhost:3030/api/first-user/users/pictures
// - Select: Body > form-data
// - Put as key: picture (and select "File")
// - Upload your file
// To perform the request in HTML:
//   <form method="post" enctype="multipart/form-data" action="http://localhost:3030/api/users/first-user/pictures">
//     <input type="file" name="picture" />
//     <input type="submit" value="Upload" />
//   </form>
router.post('/first-user/pictures', parser.single('picture'), (req, res, next) => {
  console.log('DEBUG req.file', req.file);
  User.findOneAndUpdate({}, { pictureUrl: req.file.url })
    .then(() => {
      res.json({
        success: true,
        pictureUrl: req.file.url
      })
    })
});

module.exports = router;
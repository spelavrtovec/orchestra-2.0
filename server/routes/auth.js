const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jwt-simple');
const passport = require('passport');
const config = require('../configs');

const uploadCloud = require("../configs/cloudinary");


router.post('/signup', uploadCloud.single("file"), (req, res, next) => {
  // extract the info we need from the body of the request
  const { email, name, password, bio, value, myRole } = req.body;

  if (req.body.name === "" || req.body.password === "" || req.body.email === "" ) {
    var message = "One of your credentials must be missing."

    res.json({
      success: false, 
      message
    });
  }

  else {
    if (req.file){
      pictureUrl = req.file.url
    }
    else {
      pictureUrl = "https://res.cloudinary.com/dvsfkhs3x/image/upload/v1531396737/user.png";
    }

    const user = new User({
      name,
      pictureUrl,
      bio,
      value,
      myRole,
      email,
    });
    
    User
    .register(user, password, err => {
      if (err) return next(err);
      res.json({ 
        success: true,
      });
    });
  }
});

router.post('/login', (req, res, next) => {
  const authenticate = User.authenticate();
  const { email, password } = req.body;
  // check if we have a email and password
  if (email && password) {
    // test if the credentials are valid
    authenticate(email, password, (err, user, failed) => {
      if (err) {
        // an unexpected error from the database
        return next(err);
      }
      if (failed) {
        // failed logging (bad password, too many attempts, etc)
        return res.status(401).json({
          error: failed.message,
        });
      }
      if (user) {
        // success!! Save the user id
        // NEVER save the password here
        // the id is usually enough because we can get back
        // the actual user by fetching the database later
        const payload = {
          id: user.id,
        };
        // generate a token and send it
        // this token will contain the user.id encrypted
        // only the server is able to decrypt it
        // for the client, this is just a token, he knows that
        // he has to send it
        const token = jwt.encode(payload, config.jwtSecret);
        res.json({
          token,
          name: user.name,
        });
      }
    });
  } else {
    // unauthorized error
    res.sendStatus(401);
  }
});

module.exports = router;
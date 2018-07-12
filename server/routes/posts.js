var express = require("express");
const Post = require("../models/post");

const jwt = require("jwt-simple");
const passport = require("passport");
const config = require("../configs/index");
const Group = require("../models/group");
var router = express.Router();

//to create a new post in a group
router.post(
  "/:groupId/post",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let groupId = req.params.groupId;
    let { text } = req.body;
    let _user = req.user._id;

    const data = { text, _user, groupId };

    Post
    .create(data)
    .then(post => {
      Group
      .findByIdAndUpdate(groupId, { $push: { posts:  post } }, {new: true})
      .then(() =>{
        Group
        .save()
        .then((group) => {
            console.log(group)
        })
    })
        return res.json({
          success: true,
          post
        });
      })
    .catch(error => next(error));
});

//to delete a post:
router.delete(
  "/:postId",
  passport.authenticate("jwt", config.jwtSession),
  (req, res, next) => {
    let postId = req.params.postId

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
    console.log(data)

      Post
      .findByIdAndUpdate(postId, { $push: { replies:  data } }, {new: true})
      .then((post) =>{ 
        return res.json({
          success: true,
          post
        });
    })
    
    .catch(error => next(error));
});


//to post a file in a group
// router.post(':groupId/file', parser.single('file'), (req, res, next) => {
//   console.log('DEBUG req.file', req.file);
//   Group
//   .findOneAndUpdate(groupId, { fileUrl: req.file.url })
//     .then(() => {
//       res.json({
//         success: true,
//         fileUrl: req.file.url
//       })
//     })
// });

// cloudinary.uploader.upload("SinglePageSample.pdf", function(result) { }, 
//                            {public_id: 'single_page_pdf'})

module.exports = router;

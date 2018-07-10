// const mongoose = require("mongoose");
// const User = require("../models/User");
// const User = require("../models/User");
// const databaseName = "orchestra-db";

// mongoose.Promise = Promise;
// mongoose.connect(process.env.MONGODB_URI);

// const users = [
//   {
//     name: "ddd",
//     email: "d@d.com",
//     pictureUrl: "http://res.cloudinary.com/dvsfkhs3x/image/upload/v1531145239/my-images/qy3u4klpzkpqoigxboiw.jpg",
//     // _groups: [{ type: Schema.Types.ObjectId, ref: "Group" }],
//     isAdmin: true,
//     isMember: true
//   }
// ];

// const groups = [
//   {
//     // _users: { type: Schema.Types.ObjectId, ref: "User" },
//     name: "festival",
//     place: "Skofja Loka",
//     info: "lalali"
//     // _posts: { type: Schema.Types.ObjectId, ref: "Post" },
//   },
//   {
//     // _users: { type: Schema.Types.ObjectId, ref: "User" },
//     name: "music school",
//     place: "Skofja Loka",
//     info: "njdkewbfohjkl"
//     // _posts: { type: Schema.Types.ObjectId, ref: "Post" },
//   }
// ];

// User.deleteMany()
//   .then(() => User.create(users))
//   .then(usersDocument => {
//     console.log(usersDocument);
//     console.log(`Create ${users.length} users`);

//     mongoose.connection.close();
//   })
//   .catch(err => {
//     throw err;
//   });

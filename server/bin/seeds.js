const mongoose = require("mongoose");
const User = require("../models/user");
const databaseName = "orchestra-db";

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI);

const users = [
  {
    name: "Tilen Draksler",
    pictureUrl: "http://www.rtvslo.si/_up/photos/2016/08/24/u52214-340664_slika-21_show.jpg",
    bio: "",
    myRole: "conductor",
    email: "nono",
    value: "Tilen Draksler",
    // _groups: [{ type: Schema.Types.ObjectId, ref: "Group" }],
    isPublic: true,
    role: "ADMIN",
  },
  {
    name: "Nigel Kennedy",
    pictureUrl: "https://i.pinimg.com/736x/4e/aa/42/4eaa42cdc10380cce5c1b31a6f23bc6d--nigel-kennedy-music-lovers.jpg",
    bio: "Nigel Kennedy (born 28 December 1956) is an English violinist and violist. He made his early career in the classical field, and has more recently performed in jazz, klezmer and other music genres.",
    myRole: "violinist",
    email: "nonono",
    value: "Nigel Kennedy",
    // _groups: [{ type: Schema.Types.ObjectId, ref: "Group" }],
    isPublic: true,
    role: "MEMBER",
  },
  {
    name: "André Rieu",
    pictureUrl: "https://press.andrerieu.com/wp-content/uploads/2016/05/home_links3-559x323.jpg",
    bio: "André Léon Marie Nicolas Rieu (born 1 October 1949) is a Dutch violinist and conductor best known for creating the waltz-playing Johann Strauss Orchestra.",
    myRole: "violinist",
    email: "nonon",
    value: "André Rieu",
    // _groups: [{ type: Schema.Types.ObjectId, ref: "Group" }],
    isPublic: true,
    role: "MEMBER",
  },
];

const groups = [
  {
    // _members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    name: "Amadeo Festival",
    place: "Škofja Loka",
    info: "(23. - 26. June)",
    // _files: Array,
    // posts: "",
  },
  {
    // _members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    name: "Masterclasses",
    place: "Maastricht",
    info: " ",
    // _files: Array,
    // posts: "",
  }
];

User.deleteMany()
  .then(() => User.create(users))
  .then(usersDocument => {
    console.log(usersDocument);
    console.log(`Create ${users.length} users`);

    mongoose.connection.close();
  })
  .catch(err => {
    throw err;
  });

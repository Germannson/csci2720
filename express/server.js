const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
var app = express();

app.use(
  session({
    secret: "csci2720",
    resave: true,
    saveUninitialized: true,
  })
);

mongoose.connect(
  "mongodb+srv://test1:1234@cluster0.ipjnm.mongodb.net/project?authSource=admin&replicaSet=atlas-1207ba-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

var db = mongoose.connection;
//connection failed
db.on("error", console.error.bind(console, "server connection error"));
db.once("open", function () {
  console.log("server connection is open");
});

app.use(bodyParser.urlencoded({ extended: false }));

const UserSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  userName: { type: String, required: true },
  userPassword: { type: String, required: true },
  userFavourite: { type: [mongoose.Schema.Types.ObjectId] },
});

var User = mongoose.model("User", UserSchema);

app.post("/login", (req, res) => {
  // Form validation
  const userId = req.body.userId;
  const userPassword = req.body.userPassword;

  // Find user by email
  User.findOne({ userId }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ idnotfound: "User ID not found" });
    }

    // Check password
    bcrypt.compare(userPassword, user.userPassword).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        req.session.loggedin = true;
        req.session.userId = user.userId;
        res.redirect("/all");
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

app.post("/register", async (req, res) => {
  var maxuserId;
  User.find()
    .sort({ userId: -1 })
    .limit(1)
    .then(async (user) => {
      const newUser = new User({
        userId: !user ? 0 : user.userId + 1,
        userName: req.body.userName,
        userPassword: req.body.userPassword,
      });
      console.log(newUser);
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.userPassword, salt, (err, hash) => {
          if (err) throw err;
          newUser.userPassword = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    });
});

app.get("/all", function (request, response) {
  if (request.session.loggedin) {
    response.send("Welcome back, " + request.session.username + "!");
  } else {
    response.send("Please login to view this page!");
  }
  response.end();
});

app.listen(2009, () => console.log("Server up and running on port 2009 !"));

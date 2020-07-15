const express = require("express");
const app = express();
app.use(express.static(__dirname));

var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://tcmak:p9417528@cluster0.ipjnm.mongodb.net/project?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
var db = mongoose.connection;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function () {
  console.log("Connection is open...");
});

var Schema = mongoose.Schema;
var EventSchema = mongoose.Schema({
  eventId: { type: Number, required: true, unique: true },
  eventSummary: { type: String },
  eventDesc: { type: String },
  eventLocation: { type: String },
  eventDate: { type: String },
  eventOrg: { type: String },
});

var UserSchema = mongoose.Schema({
  userId: { type: Number, required: true, unique: true },
  userName: { type: String, required: true, unique: true },
  userPassword: { type: String, required: true },
  userFavourite: { type: Array },
});

var CommentSchema = mongoose.Schema({
  event: { type: Schema.Types.ObjectId, ref: "Event" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  commentContent: { type: String },
  commentDate: { type: Date, default: Date.now },
});

var Event = mongoose.model("Event", EventSchema);
var User = mongoose.model("User", UserSchema);
var Comment = mongoose.model("Comment", CommentSchema);

const server = app.listen(3000);

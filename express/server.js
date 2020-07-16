const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
// app.use(express.static(__dirname));

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
app.use(bodyParser.json());

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

/*
Method: POST
Body: 
eventSummary (String)
eventDesc (String)
eventLocation (String)
eventDate (String)
eventOrg (String)
*/
app.post("/api/create/event", async function (req, res) {
  let newId;
  await Event.findOne()
    .sort({ eventId: -1 })
    .where("eventId")
    .gte(10000000)
    .then((result) => {
      if (!result) {
        newId = 10000000;
        console.log("YOOOOOOOOOOO");
      } else {
        newId = result.eventId + 1;
        console.log("YOOOOOOOOOOO");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  const newEvent = new Event({
    eventId: newId,
    eventSummary: req.body.eventSummary,
    eventDesc: req.body.eventDesc,
    eventLocation: req.body.eventLocation,
    eventDate: req.body.eventDate,
    eventOrg: req.body.eventOrg,
  });
  await newEvent
    .save()
    .then((result) => {
      res.status(200).send(result);
      console.log("YOOOOOOOOOOO");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/*
Method: POST
Body: 
eventId (Number)
userId (Number)
commentContent (String)
*/
app.post("/api/create/comment", async function (req, res) {
  let eventObjId;
  let userObjId;
  await Event.findOne()
    .where("eventId")
    .equals(req.body.eventId)
    .then((result) => {
      // console.log(req.body.eventId);
      // console.log(result);
      eventObjId = result._id;
    })
    .catch((err) => {
      res.send(err);
      // console.log(err);
    });
  await User.findOne()
    .where("userId")
    .equals(req.body.userId)
    .then((result) => {
      userObjId = result._id;
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
  const newComment = new Comment({
    event: eventObjId,
    user: userObjId,
    commentContent: req.body.commentContent,
  });
  await newComment
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* 
Method: GET
Query string:
event (Object ID)

Return: Array of Object
[{"commentContent": <String>, "userName": <String>}]
*/
app.get("/api/read/comment", async function (req, res) {
  let eventObjId;
  await Event.findOne()
    .where("eventId")
    .equals(req.query.event)
    .then((result) => {
      eventObjId = result._id;
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

  await Comment.find()
    .sort({ commentDate: -1 })
    .populate("user")
    .where("event")
    .equals(eventObjId)
    .then((result) => {
      let resString = result.map((element) => ({
        commentContent: element.commentContent,
        userName: element.user.userName,
      }));
      console.log(resString);
      res.send(resString);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* 
Method: GET

Return: Array of Object
[
  {
    "_id": <ObjectId>,
    "eventId": <Int32>,
    "eventSummary": <String>,
    "eventDesc": <String>,
    "eventLocation": <String>,
    "eventDate": <String>,
    "eventOrg": <String>,
    "__v": <Int32>
  }
]
*/
app.get("/api/read/event", async function (req, res) {
  await Event.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

app.get("/api/read/event/:eventId", async function (req, res) {
  await Event.findOne()
    .where("eventId")
    .equals(req.params.eventId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

app.get("/api/delete/event/:eventId", async function (req, res) {
  await Event.findOneAndDelete()
    .where("eventId")
    .equals(req.params.eventId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

app.get("/api/update/user/:userId/favourite/:eventId", async function (
  req,
  res
) {
  let eventObjId;
  await Event.findOne()
    .where("eventId")
    .equals(req.params.eventId)
    .then((result) => {
      eventObjId = result._id;
    })
    .catch((err) => {
      res.send(err);
    });

  await User.findOneAndUpdate(
    { userId: req.params.userId },
    { $push: { userFavourite: { $each: [eventObjId] } } }
  )
    .then((result) => {
      console.log("added");
      res.send(result);
    })
    .catch((err) => {
      // console.log(err);
      res.status(500).json(err);
    });
});

app.get("/api/read/user/:userId/favourite", async function (req, res) {
  await User.distinct("userFavourite")
    .where("userId")
    .equals(req.params.userId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
      res.status(500).json(err);
    });
});

const server = app.listen(3000);

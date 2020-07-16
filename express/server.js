const express = require("express");
const app = express();
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
      eventObjId = result._id;
    });
  await User.findOne()
    .where("userId")
    .equals(req.body.userId)
    .then((result) => {
      userObjId = result._id;
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
      console.log("YOOOOOOOOOOO");
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
  await Comment.find()
    .populate("user")
    .where("event")
    .equals(req.query.event)
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

// TODO:
// app.post("/api/delete/event", async function (req, res) {
//   await Event.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

app.get('/api/search/keyword/:keyword/field/:field', async function(req,res) {    
  var keyword = null;
  if(req.params['field']=='eventId'){
    keyword = Number(req.params['keyword']);
    await Event.find( {eventId: keyword}).then((result) => {
      res.send(result);
      
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
    
  }
  else{  
    keyword = String(req.params['keyword']);
  
  var field = String(req.params['field']);
  var query = {};
  
  query[field] = { $regex: keyword, $options: 'i'};
  
 console.log(query+field+keyword);
  await Event.find(query).then((result) => {
    res.send(result);
    
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
}
});    

app.post("/api/modify/event", async function (req, res) {

 
    Event
    .findOne({eventId: req.body.eventId})
    .then((result) => {
      result.eventSummary= req.body.eventSummary;
      result.eventDesc= req.body.eventDesc;
      result.eventLocation= req.body.eventLocation;
      result.eventDate= req.body.eventDate;
      result.eventOrg= req.body.eventOrg;
      result.save();
      res.status(200).send(result);
      console.log("YOOOOOOOOOOO");
      
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
    
});

const server = app.listen(2000);

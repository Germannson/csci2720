import React, { Component } from "react";
import EventDetail from "./EventDetail";
import AddComment from "./AddComment";
import Comments from "./Comments";
import axios from "axios";

class EventDetailPage extends Component {
  state = {
    event: [],
    eventId: 468525,
    userId: 2,
    userName: "lai",
    newComment: [],
  };

  componentDidMount() {
    console.log("called");
    axios
      .get("http://localhost:3000/api/read/event/" + this.state.eventId)
      .then((res) => {
        this.setState({ event: res.data });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDelete = (event) => {
    event.preventDefault();
    axios
      .get("http://localhost:3000/api/delete/event/" + this.state.eventId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Event deleted!");
  };

  handleFavourite = (event) => {
    event.preventDefault();
    axios
      .get(
        "http://localhost:3000/api/update/user/" +
          this.state.userId +
          "/favourite/" +
          this.state.eventId
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("Event Favourited!");
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // alert("clicked!");
    // console.log(this.props.eventId);
    // console.log(this.props.userId);
    // console.log(event.target.comment.value);
    axios
      .post("http://localhost:3000/api/create/comment", {
        eventId: this.state.eventId,
        userId: this.state.userId,
        commentContent: event.target.comment.value,
      })
      .then((res) => {
        // alert("Sent!");

        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      newComment: this.state.newComment.concat({
        commentContent: event.target.comment.value,
        userName: this.state.userName,
      }),
    });
  };

  render() {
    return (
      <>
        <EventDetail
          event={this.state.event}
          onDelete={this.handleDelete}
          onFavourite={this.handleFavourite}
        />
        <AddComment
          eventId={this.state.eventId}
          userId={this.state.userId}
          onSubmit={this.handleSubmit}
        />
        <Comments
          eventId={this.state.eventId}
          newComment={this.state.newComment}
        />
      </>
    );
  }
}

export default EventDetailPage;

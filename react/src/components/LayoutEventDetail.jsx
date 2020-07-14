import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import EventDetail from "./EventDetail";
import AddComment from "./AddComment";
import Comments from "./Comments";

class LayoutEventDetail extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <EventDetail />
        <AddComment />
        <Comments />
      </>
    );
  }
}

export default LayoutEventDetail;

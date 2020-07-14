import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import EventModify from "./EventModify";

class LayoutCreateEvent extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <EventModify />;
  }
}

export default LayoutCreateEvent;

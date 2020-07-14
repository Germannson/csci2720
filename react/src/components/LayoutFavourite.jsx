import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import EventList from "./EventList";

class LayoutFavourite extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return <EventList />;
  }
}

export default LayoutFavourite;

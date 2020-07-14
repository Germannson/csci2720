import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Search from "./Search";
import EventList from "./EventList";

class LayoutAllEvent extends Component {
  render() {
    return (
      <>
        <Search />
        <EventList />
      </>
    );
  }
}

export default LayoutAllEvent;

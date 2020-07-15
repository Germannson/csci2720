import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import EventDetail from "./components/EventDetail";
import AddComment from "./components/AddComment";
import Comments from "./components/Comments";
import EventList from "./components/EventList";
class App extends React.Component {
  render() {
    return (
      <>
        <EventList />
      
      </>
    );
  }
}

/*
class App extends React.Component {
  render() {
    return (
      <>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>{" "}
        <Button variant="link">Link</Button>
      </>
    );
  }
}
*/
export default App;

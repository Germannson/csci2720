import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import EventDetail from "./components/EventDetail";
import AddComment from "./components/AddComment";
import Comments from "./components/Comments";

class App extends React.Component {
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

export default App;

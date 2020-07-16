import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import EventDetail from "./components/EventDetail";
import AddComment from "./components/AddComment";
import Comments from "./components/Comments";
import EventList from "./components/EventList";
import Search from "./components/Search";
import EventNav from "./components/EventNav";


class App extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      keyword: 0,
    };
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }
  handleKeywordChange(evt) {
    this.setState({ keyword: Number(evt.target.id)});
    console.log(this.state.keyword);
    console.log(evt.target.id);
    return <EventList keyword= {2} />;
}

  
  render() {
    return (
      <>
      <EventNav/>
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

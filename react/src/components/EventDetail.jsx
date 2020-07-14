import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
class EventDetail extends Component {
  render() {
    return (
      <>
        <Link to="/all">Back</Link>
        <Container className="container bg-light m-5">
          <Row className="row">
            <h2>Detail</h2>
          </Row>
          <Row className="row">
            <h3>Event summary</h3>
          </Row>
          <Row className="row">
            <div>Penguin festival</div>
          </Row>
          <Row className="row">
            <h3>Event date(s)</h3>
          </Row>
          <Row className="row">
            <div>June 4, 2020 - September 11, 2020</div>
          </Row>
          <Row className="row">
            <h3>Event organizer</h3>
          </Row>
          <Row className="row">
            <div>Penguin Corp</div>
          </Row>
          <Row className="row">
            <h3>Event location</h3>
          </Row>
          <Row className="row">
            <div>Museum</div>
          </Row>
          <Row className="row">
            <h3>Event description</h3>
          </Row>
          <Row className="row">
            <div>
              Penguin is happy. They are going to do something in this event.
              Penguin is happy. They are going to do something in this event.
              Penguin is happy. They are going to do something in this event.
              Penguin is happy. They are going to do something in this event.
              Penguin is happy. They are going to do something in this event.
              Penguin is happy. They are going to do something in this event.
              Penguin is happy. They are going to do something in this event.
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default EventDetail;

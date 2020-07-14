import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class EventList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  EventListHeader = () => {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <b>Summary</b>
            </Col>
            <Col>
              <b>Location</b>
            </Col>
            <Col>
              <b>Date</b>
            </Col>
            <Col>
              <b>Organizer</b>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  EventListItem = () => {
    return (
      <>
        <Row>
          <Col>Penguin festival</Col>
          <Col>Big park</Col>
          <Col>June 4, 2020 - August 4, 2020</Col>
          <Col>Penguin corp</Col>
        </Row>
      </>
    );
  };

  render() {
    return (
      <>
        <this.EventListHeader />

        <Container>
          <this.EventListItem />
          <this.EventListItem />
          <this.EventListItem />
          <this.EventListItem />
          <this.EventListItem />
        </Container>
      </>
    );
  }
}

export default EventList;

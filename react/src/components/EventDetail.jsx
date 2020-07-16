import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink,
} from "react-router-dom";

class EventDetail extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Row className="h-100 justify-content-center align-items-center">
          <Col lg={4}>
            <div>
              <h1>Event Detail</h1>
            </div>
          </Col>
          <Col lg={1}>
            {/* <Link to={`/eventModify/${this.state.eventId}`}>Edit</Link> */}
          </Col>
          <Col lg={1}></Col>
          <Col lg={1}>
            <Button variant="outline-danger" onClick={this.props.onDelete}>
              Delete
            </Button>
          </Col>
          <Col lg={3}></Col>
          <Col lg={1}>
            <Button variant="primary" onClick={this.props.onFavourite}>
              Favourite
            </Button>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div>
              <h2>Event summary</h2>

              <p>{this.props.event.eventSummary}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div>
              <h2>Event date(s)</h2>

              <p>{this.props.event.eventDate}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div>
              <h2>Event organizer</h2>

              <p>{this.props.event.eventOrg}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div>
              <h2>Event location</h2>

              <p>{this.props.event.eventLocation}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div>
              <h2>Event description</h2>

              <p>{this.props.event.eventDesc}</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventDetail;

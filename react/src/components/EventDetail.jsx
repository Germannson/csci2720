import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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
            <Button variant="outline-secondary">Edit</Button>
          </Col>
          <Col lg={1}></Col>
          <Col lg={1}>
            <Button variant="outline-danger">Delete</Button>
          </Col>
          <Col lg={3}></Col>
          <Col lg={1}>
            <Button variant="primary">Favourite</Button>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div>
              <h2>Event summary</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis voluptas ut explicabo atque consequuntur fugiat,
                culpa aliquam neque vero incidunt enim a deserunt optio itaque
                non dolorum possimus. Rerum, soluta?
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div>
              <h2>Event date(s)</h2>
              <p>DDMMYYYY</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div>
              <h2>Event organizer</h2>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div>
              <h2>Event location</h2>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={7}>
            <div>
              <h2>Event description</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis voluptas ut explicabo atque consequuntur fugiat,
                culpa aliquam neque vero incidunt enim a deserunt optio itaque
                non dolorum possimus. Rerum, soluta?
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventDetail;

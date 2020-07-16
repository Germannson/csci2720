import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink
} from "react-router-dom";

class EventModify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: props.params.Ismodifing, //props.info.mode    // 0 for add new , 1 for modify
      eventId: props.params.eventId,
    };
  }

  render() {
    const FormItem = () => {
      if (this.state.mode===0) {   //add
        return (
          <Container>
            <NavLink to="/eventNav" type="button" variant="outline-dark" className="float-right" >
                  Back
            </NavLink>
            <Form action="http://localhost:2000/api/create/event" method="post">
              
              <Form.Group id="eventSummary" >
                <Form.Label>Event Summary</Form.Label>
                <Form.Control name="eventSummary" type="text" placeholder="Event Summary" />
              </Form.Group>
              <Form.Group >
                <Form.Label>Event Date</Form.Label>
                <Form.Control name = "eventDate" type="text" placeholder="Date" />
              </Form.Group>
              <Form.Group >
                <Form.Label>Event Organizer</Form.Label>
                <Form.Control name = "eventOrg" type="text" placeholder="Event Organizer" />
              </Form.Group>
              <Form.Group >
                <Form.Label>Event Location</Form.Label>
                <Form.Control name = "eventLocation" type="text" placeholder="Location" />
              </Form.Group>
              <Form.Group >
                <Form.Label>Event Description</Form.Label>
                <Form.Control name = "eventDesc" as="textarea" rows="4" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        );
      } else if(this.state.eventId!==null){
        return (
          <Container>
            <NavLink to="/eventNav" type="button" variant="outline-dark" className="float-right" >
                  Back
            </NavLink>
            <Form action="http://localhost:2000/api/modify/event" method="post">
              <Form.Group as={Row} controlId="formPlaintextEventID">
                <Form.Label column sm="2">
                  Event ID:
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={this.state.eventId}
                    name="eventId"
                  />
                </Col>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Event Summary</Form.Label>
                <Form.Control name="eventSummary" type="text" placeholder="Event Summary" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Event Date</Form.Label>
                <Form.Control name="eventDate" type="text" placeholder="Date" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>Event Organizer</Form.Label>
                <Form.Control name="eventOrg" type="text" placeholder="Event Organizer" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>Event Location</Form.Label>
                <Form.Control name="eventLocation" type="text" placeholder="Location" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Event Description</Form.Label>
                <Form.Control name="eventDesc" as="textarea" rows="4" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        );
      }
    };
    return <FormItem />;
  }
}

export default EventModify;

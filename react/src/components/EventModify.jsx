import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
class EventModify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0, //props.info.mode    // 0 for modify ,1 for add new
      eventId: 0,
    };
  }

  render() {
    const FormItem = () => {
      if (this.state.mode) {
        return (
          <Container>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Event ID</Form.Label>
                <Form.Control type="text" placeholder="Event ID" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Event Summary</Form.Label>
                <Form.Control type="text" placeholder="Event Summary" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="text" placeholder="Date" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>Event Organizer</Form.Label>
                <Form.Control type="text" placeholder="Event Organizer" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>Event Location</Form.Label>
                <Form.Control type="text" placeholder="Location" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Event Description</Form.Label>
                <Form.Control as="textarea" rows="4" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        );
      } else {
        return (
          <Container>
            <Form>
              <Form.Group as={Row} controlId="formPlaintextEventID">
                <Form.Label column sm="2">
                  Event ID:
                </Form.Label>
                <Col sm="10">
                  <Form.Control
                    plaintext
                    readOnly
                    defaultValue={this.state.eventId}
                  />
                </Col>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput2">
                <Form.Label>Event Summary</Form.Label>
                <Form.Control type="text" placeholder="Event Summary" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput3">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="text" placeholder="Date" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput4">
                <Form.Label>Event Organizer</Form.Label>
                <Form.Control type="text" placeholder="Event Organizer" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput5">
                <Form.Label>Event Location</Form.Label>
                <Form.Control type="text" placeholder="Location" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Event Description</Form.Label>
                <Form.Control as="textarea" rows="4" />
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

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
  withRouter,
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
 handlesubmit = event =>{
  console.log(event);
      event.preventDefault();
      axios.post("http://localhost:2000/api/create/event", {
        
        eventSummary : event.target.eventSummary.data,
        eventDate : event.target.eventDate.data,
        eventOrg : event.target.eventOrg.data,
        eventLocation : event.target.eventLocation.data,
        eventDesc : event.target.eventDesc.data,
      }).then((res)=>{
       
                this.props.history.push("/eventAll");
      })
}
handlesubmit2 = event =>{
  event.preventDefault();
  axios.post("http://localhost:2000/api/modify/event", {
    eventId : event.target.eventId.value,
    eventSummary : event.target.eventSummary.value,
    eventDate : event.target.eventDate.value,
    eventOrg : event.target.eventOrg.value,
    eventLocation : event.target.eventLocation.value,
    eventDesc : event.target.eventDesc.value,
  }).then((res)=>{
    this.props.history.push("/eventDetail/"+this.state.eventId);
  })
}


  render() {
    const FormItem = () => {
      if (this.state.mode===0) {   //add
        return (
          <Container>
            <NavLink to="/eventNav" type="button" variant="outline-dark" className="float-right" >
                  Back
            </NavLink>
            <Form >
              
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
              <Button variant="primary" type="button" onClick = {this.handlesubmit.bind(this)} >
                Submit
              </Button>
            </Form>
          </Container>
        );
      } else if(this.state.eventId!=null){
        return (
          <Container>
            <NavLink to="/eventNav" type="button" variant="outline-dark" className="float-right" >
                  Back
            </NavLink>
            <Form >
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
              <Button variant="primary" type="submit" onSubmit= {this.handlesubmit2.bind(this)} >
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

export default withRouter( EventModify);

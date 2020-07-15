import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
class Search extends Component {
  constructor() {
    super();
    this.state = {
      currentfield: "choose field",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(field) {
    this.setState({
      currentfield: field.target.eventKey,
    });
  }
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Search Keyword</Form.Label>
            <Form.Control type="text" placeholder="Keyword" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Field select</Form.Label>
            <Form.Control as="select">
              <option value="">Events Id</option>
              <option>Events Desc</option>
              <option>Events Summary</option>
              <option>Events Location</option>
              <option>Events Date</option>
              <option>Events Org</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Search;

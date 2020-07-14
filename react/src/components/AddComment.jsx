import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.comment);
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Form>
          <Form.Group inline as={Col} controlId="formComment">
            <Form.Control
              as="textarea"
              rows="3"
              placeholder="Your comment here"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="reset">
            Reset
          </Button>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;

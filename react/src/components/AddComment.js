import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class AddComment extends Component {
  render() {
    return (
      <>
        <Form.Row>
          <Form.Group as={Col} controlId="formKeyword">
            <Form.Control
              type="text"
              placeholder="Keyword"
              name="keyword"
              value={this.state.keyword}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="reset">
            Reset
          </Button>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Search
          </Button>
        </Form.Row>
      </>
    );
  }
}

export default Event;

import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

class AddComment extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col lg={1}>
            <Image src="https://picsum.photos/50" roundedCircle />
          </Col>
          <Col lg={11}>
            <Form>
              <Form.Group controlId="newComment">
                <Form.Control type="email" placeholder="Add a comment..." />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="float-right mx-2"
              >
                Send
              </Button>
              <Button
                variant="primary"
                type="reset"
                className="float-right mx-2"
              >
                Reset
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddComment;

import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import axios from "axios";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* handleSubmit = (event) => {
    event.preventDefault();

    // alert("clicked!");
    // console.log(this.props.eventId);
    // console.log(this.props.userId);
    // console.log(event.target.comment.value);
    axios
      .post("http://localhost:3000/api/create/comment", {
        eventId: this.props.eventId,
        userId: this.props.userId,
        commentContent: event.target.comment.value,
      })
      .then((res) => {
        // alert("Sent!");
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }; */

  render() {
    return (
      <Container>
        <Row className="mt-5">
          <Col lg={1}>
            <Image src="https://picsum.photos/50" roundedCircle />
          </Col>
          <Col lg={11}>
            <Form onSubmit={this.props.onSubmit}>
              <Form.Group controlId="newComment">
                <Form.Control
                  type="text"
                  name="comment"
                  placeholder="Add a comment..."
                />
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

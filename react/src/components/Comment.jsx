import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";

class Comment extends Component {
  render() {
    return (
      <Row className="mt-5">
        <Col lg={1}>
          <Image src="https://picsum.photos/50" roundedCircle />
        </Col>
        <Col lg={9}>
          <div>
            <span className="font-weight-bold">{this.props.userName}</span>
            <p>{this.props.commentContent}</p>
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
    );
  }
}

export default Comment;

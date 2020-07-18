import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Comment from "./Comment";
import axios from "axios";

class Comments extends Component {
  state = { comments: [] };
  componentDidMount() {
    axios
      .get("http://localhost:2000/api/read/comment?event=" + this.props.eventId)
      .then((res) => {
        const comments = res.data;
        this.setState({ comments });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container>
        {this.props.newComment.reverse().map((comment) => (
          <Comment
            userName={comment.userName}
            commentContent={comment.commentContent}
          />
        ))}
        {this.state.comments.map((comment) => (
          <Comment
            userName={comment.userName}
            commentContent={comment.commentContent}
          />
        ))}
      </Container>
    );
  }
}

export default Comments;

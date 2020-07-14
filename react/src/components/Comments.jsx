import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Comments extends Component {
  render() {
    return (
      <div className="container bg-info">
        <div className="row">
          <div className="col">Cool</div>
          <div className="col">Warm</div>
          <div className="col">Cold</div>
        </div>
        <div className="row">
          <div className="col">Cool</div>
          <div className="col">Warm</div>
          <div className="col">Cold</div>
        </div>
        <div className="row">
          <div className="col">Cool</div>
          <div className="col">Warm</div>
          <div className="col">Cold</div>
        </div>
      </div>
    );
  }
}

export default Comments;

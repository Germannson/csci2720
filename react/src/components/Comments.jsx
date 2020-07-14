import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

function Event() {
  return (
    <Container>
      <Row className="mt-5">
        <Col lg={1}>
          <Image src="https://picsum.photos/50" roundedCircle />
        </Col>
        <Col lg={9}>
          <div>
            <span>User Name</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda aspernatur iste quidem odio ab, beatae voluptatibus
              autem voluptatem voluptate dignissimos possimus fugit sit, natus
              tempore culpa nam inventore architecto eum?
            </p>
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
      <Row className="mt-5">
        <Col lg={1}>
          <Image src="https://picsum.photos/50" roundedCircle />
        </Col>
        <Col lg={9}>
          <div>
            <span>User Name</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda aspernatur iste quidem odio ab, beatae voluptatibus
              autem voluptatem voluptate dignissimos possimus fugit sit, natus
              tempore culpa nam inventore architecto eum?
            </p>
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
      <Row className="mt-5">
        <Col lg={1}>
          <Image src="https://picsum.photos/50" roundedCircle />
        </Col>
        <Col lg={9}>
          <div>
            <span>User Name</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda aspernatur iste quidem odio ab, beatae voluptatibus
              autem voluptatem voluptate dignissimos possimus fugit sit, natus
              tempore culpa nam inventore architecto eum?
            </p>
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
      <Row className="mt-5">
        <Col lg={1}>
          <Image src="https://picsum.photos/50" roundedCircle />
        </Col>
        <Col lg={9}>
          <div>
            <span>User Name</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda aspernatur iste quidem odio ab, beatae voluptatibus
              autem voluptatem voluptate dignissimos possimus fugit sit, natus
              tempore culpa nam inventore architecto eum?
            </p>
          </div>
        </Col>
        <Col lg={2}></Col>
      </Row>
    </Container>
  );
}

export default Event;

import React, { Component } from "react";
import { Form, Button, Container } from "bootstrap-4-react";

class Login extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Form float="right">
          <Form.Group>
            <label htmlFor="exampleInputEmail1">User Name</label>
            <Form.Input
              type="email"
              id="exampleInputEmail1"
              placeholder="User Name"
            />
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">Password</label>
            <Form.Input
              type="password"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </Form.Group>

          <Button primary type="submit">
            Sign in
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;

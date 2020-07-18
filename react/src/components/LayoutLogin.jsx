import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";

class LayoutLogin extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = this.props;

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      userId: this.state.userId,
      userPassword: this.state.userPassword,
    };
    axios.post("http://localhost:2000/api/login", data).then((res) => {
      this.setState({
        userId: res.data.userId,
        userName: res.data.userName,
        isLoggedIn: res.data.isLoggedIn,
        userPassword: undefined,
      });
      console.log(res.data);
      console.log("after axios");
      console.log(this.state);
      this.props.updateUser(this.state);
      this.props.history.push("/eventNav");
    });
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicUserId">
          <Form.Label>User ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="User ID"
            name="userId"
            value={this.state.userId}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="userPassword"
            value={this.state.userPassword}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default withRouter(LayoutLogin);

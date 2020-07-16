import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = this.props;
  }

  onLogoutClick = () => {
    this.setState({
      userName: undefined,
      userId: undefined,
      loggedIn: false,
    });
  };

  HeaderItem = () => {
    if (this.state.loggedIn) {
      return (
        <>
          <Navbar>
            <Nav className="mr-auto">
              <Link to="/all">All events</Link>
              &nbsp;&nbsp;
              <Link to="/fav">Favourite</Link>
              &nbsp;&nbsp;
              <Link to="/login">Login</Link>
              &nbsp;&nbsp;
              <Link to="/modify">ModifyEvent</Link>
              &nbsp;&nbsp;
              <Link to="/create">CreateEvent</Link>
              &nbsp;&nbsp;
              <Link to="/detail">EventDetail</Link>
            </Nav>

            <Navbar.Text className="mr-auto">
              {this.props.info.user} &nbsp;&nbsp;&nbsp;&nbsp;
            </Navbar.Text>
            <Button variant="outline-info" onClick={this.onLogoutClick}>
              Logout
            </Button>
          </Navbar>
        </>
      );
    } else {
      return <>&nbsp;</>;
    }
  };

  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>HK Events</Navbar.Brand>
          <this.HeaderItem></this.HeaderItem>
        </Navbar>
      </>
    );
  }
}

export default Header;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.logoutUser();
  };

  logoutUser = () => (dispatch) => {
    // Remove token from local storage
    // localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    // setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    // dispatch(setCurrentUser({}));
  };

  HeaderItem = () => {
    if (this.props.info.login) {
      return (
        <>
          <Navbar>
            <Nav className="mr-auto">
              <Link to="/all">All events</Link>
              &nbsp;&nbsp;
              <Link to="/fav">Favourite</Link>
              &nbsp;&nbsp;
              <Link to="/login">Login</Link>
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

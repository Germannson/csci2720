import React, { Component } from "react";
import { Navbar } from "bootstrap-4-react";

class Header extends Component {
  state = {};
  render() {
    const bootstrap_icon =
      "https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg";
    return (
      <Navbar light bg="light">
        <Navbar.Brand href="#">A social network for events</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;

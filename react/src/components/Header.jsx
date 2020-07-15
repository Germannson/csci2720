import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <header className="bg-warning">
        <span className="display-4 text-left p-2">Event system</span>
        <form>
          <input type="text" id="keyword" name="keyword" />
          <input type="submit" value="Search" />
        </form>
        <button className="float">Logout</button>
      </header>
    );
  }
}

export default Header;

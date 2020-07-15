import React, { Component } from "react";
import { Container, Row, Col } from "bootstrap-4-react";

function Header() {
  return (
    <header className="bg-warning">
      <span className="display-4 text-left p-2">Event system</span>
      <form>
        <input className="align-right"></input>
      </form>
    </header>
  );
}

export default Header;

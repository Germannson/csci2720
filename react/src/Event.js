import React, { Component } from "react";
import { Container, Row, Col } from "bootstrap-4-react";
import "./App.css";

function Event() {
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

export default Event;

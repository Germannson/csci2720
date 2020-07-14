import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      criterion: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.keyword +
        "\nA name was submitted: " +
        this.state.criterion
    );
    event.preventDefault();
  }
  render() {
    return (
      <>
        <Form.Row>
          <Form.Group as={Col} controlId="formKeyword">
            <Form.Control
              type="text"
              placeholder="Keyword"
              name="keyword"
              value={this.state.keyword}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formFilter">
            <Form.Control
              as="select"
              name="criterion"
              value={this.state.criterion}
              onChange={this.handleChange}
            >
              <option value="none">Choose criterion</option>
              <option value="summary">Summary</option>
              <option value="date">Date</option>
              <option value="organizer">Organizer</option>
              <option value="location">Location</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="reset">
            Reset
          </Button>
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
            Search
          </Button>
        </Form.Row>
      </>
    );
  }
}

export default Search;

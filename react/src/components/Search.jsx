import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import EventList from "./EventList";
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  NavLink
} from "react-router-dom";
class Search extends Component {
    constructor(props) {
    
    super(props);
    this.state = {
      Issearching : props.Issearching,
      keyword : props.keyword,
      field : props.field,
      eventlist:[],
    
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyword = this.handleKeyword.bind(this);

  }
  handleSubmit(event) {
    this.setState({ Issearching:  1});
    event.preventDefault();
}
handleKeyword(event) {
  this.setState({ keyword:  event.target.value});
}
myChangeHandler(event) {
  this.setState({field: event.target.value});
}


  render(){
    let props = {
      Issearching : this.state.Issearching,
      keyword : this.state.keyword,
      field : this.state.field,
      }

    const RenderEventlist = (props) =>  {
      let params = {
        Issearching : props.Issearching,
        keyword : props.keyword,
        field : props.field,
        }
        console.log(props.Issearching)
      return (
        <EventList {...params} />
      );
    };

    return (
      <Container>
       
        <Form>
       
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Search Keyword</Form.Label>
            <Form.Control type="text" placeholder="Keyword" onChange={this.handleKeyword} >
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Field select</Form.Label>
            <Form.Control as="select" onChange={this.myChangeHandler.bind(this)} ref={select => { this.select = select }}>
              <option >eventId</option>
              <option >eventDesc</option>
              <option >eventSummary</option>
              <option >eventLocation</option>
              <option >eventDate</option>
              <option >eventOrg</option>
            </Form.Control>
          </Form.Group>
          <Button variant="outline-primary" type="submit" onClick={this.handleSubmit} id = {2}>
          <NavLink to={`/eventSearch/keyword/${this.state.keyword}/field/${this.state.field}`} className="float-right" >
          Submit
          </NavLink>
          </Button>
        </Form>
        <div>
        <RenderEventlist {...props}/>
        </div>
      </Container>
    );
  }
  
}

export default Search;

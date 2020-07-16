import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import EventList from "./EventList";
import Search from "./Search";
import EventModify from "./EventModify";
import Nav from 'react-bootstrap/Nav'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    NavLink
  } from "react-router-dom";
class EventNav extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
        eventId : 100,
      functionChoose : 0, //props.match.params.functionChoose,
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
  }
  handleClick1(event) {
    this.setState({
        functionChoose: 1,
    });

  }
  handleClick2(event) {
    this.setState({
        functionChoose: 2,
    });
  }
  handleClick3(event) {
    this.setState({
        functionChoose: 3,
    });
  }
  handleClick4(event) {
    this.setState({
        functionChoose: 4,
    });
  }

    render (){
       const renderNavlink =()=> {
            //let str = "/eventModify/"+String(this.state.eventId);
            //console.log(match.params.eventId);
            //return(<p>{match.params.eventId}</p>)
            return(<Link  >Modify Event</Link>)
          };
        

        
        return(
            <Container>
               
            <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <NavLink to="/eventAll"  eventKey="allevent" >All Event</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/eventSearch" eventKey="search" >Search Event</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/eventAdd" eventKey="addnew">Add Event</NavLink >
            </Nav.Item>
            <Nav.Item>
                <NavLink to={`/eventModify/${this.state.eventId}`}>Modify Event</NavLink >
            </Nav.Item>
          </Nav>
          
          
 
          
          </Container>

        );
    }

}
export default EventNav;
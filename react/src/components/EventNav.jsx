import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import EventList from "./EventList";
import Search from "./Search";
import EventModify from "./EventModify";
import Nav from 'react-bootstrap/Nav'
import ReactDOM from 'react-dom';
class EventNav extends Component {

  constructor(props) {
    
    super(props);
    this.state = {
      functionChoose : 0,
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

    render(){
        const RenderFunction = (props) =>  {
            if(props.choice===1){   //render all event
            let params = {
              Issearching : 0,
              keyword : null,
              field : null,
              }
            return (
              <EventList {...params} />
            );
            }
            else if (props.choice===2){
                return(
                    <Search />
                );
            }
            else if(props.choice=== 3)
            {
                let params = {
                    Ismodifing : 0,
                    eventId : null,
                    }
                return(
                    <EventModify {...params} />
                );

            }   
            else if(props.choice=== 4)
            {
                let params = {
                    Ismodifing : 1,
                    eventId : 10000004,
                    }
                return(
                    <EventModify {...params} />
                );

            }      
            else{
                return(
                    <p>choose a function</p>
                )
            }


          };
        return(
            <Container>
            <Nav justify variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link  eventKey="allevent" onClick ={this.handleClick1}>All Event</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  eventKey="search" onClick ={this.handleClick2}>Search Event</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  eventKey="addnew" onClick ={this.handleClick3}>Add Event</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link  eventKey="modifyevent" onClick ={this.handleClick4}>Modify Event</Nav.Link>
            </Nav.Item>
          </Nav>
          <div >
             <RenderFunction choice = {this.state.functionChoose}/>
            </div>
 
          
          </Container>

        );
    }

}
export default EventNav;
import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import EventDetailPage from "./components/EventDetail";
import AddComment from "./components/AddComment";
import Comments from "./components/Comments";
import EventList from "./components/EventList";
import Search from "./components/Search";
import EventNav from "./components/EventNav";
import EventModify from "./components/EventModify";
import Header from "./components/Header";
import EventFavourite from "./components/EventFavourite";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  useParams
} from "react-router-dom";

class App extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      keyword: 0,
      userId:'',
      userName:'',
    };
  }
  
/*
const renderEventModify =(match)=>{
  return(<EventModify params= {{eventId: match.params.eventId}} />)
  
}*/
  render() {
    
      const RenderModifyFunction = ({match}) =>  {
        
        //console.log(match.params.eventId);
        //return(<p>{match.params.eventId}</p>)
        return(<EventModify params= {{eventId: match.params.eventId}} />)
      };
      const RenderDetailFunction = ({match}) =>  {
        let props = {
          userId:this.state.userId,
          userName:this.state.userName,
          eventId: match.params.eventId,
          }
        
        //console.log(match.params.eventId);
        //return(<p>{match.params.eventId}</p>)
        return(<EventDetailPage  {...props} />)
      };
      const RenderFavouriteFunction = ({match}) =>  {
        
        //console.log(match.params.eventId);
        //return(<p>{match.params.eventId}</p>)
        return(<EventFavourite params= {{userId: match.params.userId}} />)
      };
      
    
    return (
      <Router>
        <Header></Header>
    <Switch>
    
    <Route path="/eventNav/">
    <EventNav />
 
            </Route>
      
    
 <Route path="/eventAll/">
   
    <EventList Issearching={0} />
 
            </Route>
            <Route path="/eventSearch/">
    <Search />
 
            </Route>
            <Route path="/eventModify/:eventId" component={RenderModifyFunction} >
   
            </Route>
            <Route path="/eventAdd/">

    <EventModify  params= {{Ismodifing: 0}}/>
 
            </Route>
            <Route path="/eventDetail/:eventId" component={RenderDetailFunction} >
   
            </Route>
            <Route path="/eventFavourite/:userId" component={RenderFavouriteFunction} >
   
            </Route>
    </Switch>
  </Router>
      
      
    );
  }
}

/*
class App extends React.Component {
  render() {
    return (
      <>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>{" "}
        <Button variant="link">Link</Button>
      </>
    );
  }
}
*/
export default App;

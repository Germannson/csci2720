import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import LayoutLogin from "./components/LayoutLogin";
import LayoutAllEvent from "./components/LayoutAllEvent";
import LayoutCreateEvent from "./components/LayoutCreateEvent";
import LayoutEventDetail from "./components/LayoutEventDetail";
import LayoutFavourite from "./components/LayoutFavourite";
import LayoutModifyEvent from "./components/LayoutModifyEvent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "Isla",
      login: true,
    };
  }
  render() {
    return (
      // <Provider store={store}>
      <Router>
        <div className="App">
          <Header info={this.state} />
          <Route exact path="/login" component={LayoutLogin} />
          <Route exact path="/all" component={LayoutAllEvent} />
          <Route exact path="/create" component={LayoutCreateEvent} />
          <Route exact path="/detail" component={LayoutEventDetail} />
          <Route exact path="/fav" component={LayoutFavourite} />
          <Route exact path="/modify" component={LayoutModifyEvent} />
          <Switch></Switch>
        </div>
      </Router>
      // </Provider>
    );
  }
}

export default App;

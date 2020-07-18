import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  state = this.props;

  onLogoutClick = () => {
    this.setState({
      userName: undefined,
      userId: undefined,
      isLoggedIn: false,
    });
    this.props.history.push("/login");
    // this.props.updateUser(this.state);
  };

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.isLoggedIn !== prevProps.isLoggedIn) {
      this.setState({
        userName: this.props.userName,
        userId: this.props.userId,
        isLoggedIn: this.props.isLoggedIn,
      });
    }
  }

  HeaderItem = () => {
    if (this.state.isLoggedIn) {
      return (
        <>
          <Navbar>
            

            <Navbar.Text className="mr-auto">
              {this.props.userName} &nbsp;&nbsp;&nbsp;&nbsp;
            </Navbar.Text>
            <Link to = {`/eventFavourite/2`} > Favourite</Link>
            <Button variant="outline-info" onClick={this.onLogoutClick}>
              Logout
            </Button>


          </Navbar>
        </>
      );
    } else {
      return <>&nbsp;</>;
    }
  };

  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand>HK Events</Navbar.Brand>
          <this.HeaderItem></this.HeaderItem>
        </Navbar>
      </>
    );
  }
}

export default withRouter(Header);

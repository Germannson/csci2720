import React, { Component } from "react";
import { Container,Col,Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Link,
  NavLink
} from "react-router-dom";


let events = [];

class EventFavourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      todosPerPage: 20, //props.keyword, //, //items per pages
     
      eventslist :[],
      userId : props.userId,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  componentDidMount() {

    axios.get(`http://localhost:2000/api/read/user/`+this.state.userId+`/favorite/`)  //axios.get(`http://localhost:2000/api/read/user/`+this.state.userId+`/favorite/`)
      .then(res => {
        const eventslist = res.data;
        events = res.data;
        console.log(res.data);
        this.setState({ eventslist });
      })
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }
  handleClick2(event) {
    this.setState({
      eventclicked: Number(event.target.id),
    });
  }

  render() {
    const useSortableData = (items, config = null) => {
      const [sortConfig, setSortConfig] = React.useState(config);

      const sortedItems = React.useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
          sortableItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === "ascending" ? 1 : -1;
            }
            return 0;
          });
        }
        return sortableItems;
      }, [items, sortConfig]);

      const requestSort = (key) => {
        let direction = "ascending";
        if (
          sortConfig &&
          sortConfig.key === key &&
          sortConfig.direction === "ascending"
        ) {
          direction = "descending";
        }
        setSortConfig({ key, direction });
      };

      return { items: sortedItems, requestSort, sortConfig };
    };

    const { currentPage, todosPerPage } = this.state;
    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const pageNumbers = []; //todos.length total number of events
    for (let i = 1; i <= Math.ceil(events.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <Pagination.Item
          key={number}
          id={number}
          active={number === currentPage}
          onClick={this.handleClick}
        >
          {number}
        </Pagination.Item>
      );
    });
    //events = this.state.eventslist;
    const EventsTable = (props) => {
      const { items, requestSort, sortConfig } = useSortableData(props.events);
      const getClassNamesFor = (name) => {
        if (!sortConfig) {
          return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
      };
      events = items;

      const currentTodos = items.slice(indexOfFirstTodo, indexOfLastTodo);

      const renderTodos = currentTodos.map((todo, index) => {
        return (
          <tr key={index} id={todo.eventId}>
            <td><Link to={`/eventDetail/${todo.eventId}`}>{todo.eventId}</Link></td>
            <td>{todo.eventSummary}</td>
            <td>{todo.eventDate}</td>
            <td>{todo.eventLocation}</td>
            <td>{todo.eventOrg}</td>
          </tr>
        );
      });

      // Logic for displaying page numbers

      return (
        
        <Table >
          
          <thead>
            <tr>
              <th>
                <Button
                  type="button"
                  onClick={() => requestSort("eventId")}
                  className={getClassNamesFor("eventId")}
                >
                  Id
                </Button>
              </th>

              <th>
                <Button
                  type="button"
                  onClick={() => requestSort("eventSummary")}
                  className={getClassNamesFor("eventSummary")}
                >
                  Summary
                </Button>
              </th>
              <th>
                <Button
                  type="button"
                  onClick={() => requestSort("eventDate")}
                  className={getClassNamesFor("eventDate")}
                >
                  Date
                </Button>
              </th>
              <th>
                <Button
                  type="button"
                  onClick={() => requestSort("eventLocation")}
                  className={getClassNamesFor("eventLocation")}
                >
                  Location
                </Button>
              </th>
              <th>
                <Button
                  type="button"
                  onClick={() => requestSort("eventOrg")}
                  className={getClassNamesFor("eventOrg")}
                >
                  Organizer
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>{renderTodos}</tbody>
        </Table>
      );
    };

    return (
      <Container>
        <NavLink to="/eventNav" className="float-right" >
                  Back
        </NavLink>
        <div>
          <h1>My Favourite Events List</h1>
          <p>Total {events.length} result(s)</p>
        </div>
        <div>
    
        <EventsTable events={events} />
         
        </div>
        <div>
          <Pagination id="page-numbers">{renderPageNumbers}</Pagination>
        </div>
      </Container>
    );
  }
}
export default EventFavourite;

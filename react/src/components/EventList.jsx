import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Pagination from "react-bootstrap/Pagination";
import Table from "react-bootstrap/Table";

let active = 2; // page selected
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

let events = [
  ///events data
  { eventid: 1, name: "Cheese", price: 4.9, stock: 20 },
  { eventid: 2, name: "Milk", price: 1.9, stock: 32 },
  { eventid: 3, name: "Yoghurt", price: 2.4, stock: 12 },
  { eventid: 4, name: "Heavy Cream", price: 3.9, stock: 9 },
  { eventid: 5, name: "Butter", price: 0.9, stock: 99 },
  { eventid: 6, name: "Sour Cream ", price: 2.9, stock: 86 },
  { eventid: 7, name: "Fancy French Cheese 🇫🇷", price: 99, stock: 12 },
];

class EventList extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      todosPerPage: 3, //items per pages
      eventclicked: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
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
          <tr key={index} id={todo.eventid} onClick={this.handleClick2}>
            <td>{todo.eventid}</td>
            <td>{todo.name}</td>
            <td>{todo.price}</td>
            <td>{todo.stock}</td>
          </tr>
        );
      });

      // Logic for displaying page numbers

      return (
        <Table responsive>
          <thead>
            <tr>
              <th>
                <Button
                  type="button"
                  onClick={() => requestSort("eventid")}
                  className={getClassNamesFor("name")}
                >
                  id
                </Button>
              </th>

              <th>
                <Button
                  type="button"
                  onClick={() => requestSort("name")}
                  className={getClassNamesFor("name")}
                >
                  Name
                </Button>
              </th>
              <th>
                <Button
                  type="button"
                  onClick={() => requestSort("price")}
                  className={getClassNamesFor("price")}
                >
                  Date
                </Button>
              </th>
              <th>
                <Button
                  type="button"
                  onClick={() => requestSort("stock")}
                  className={getClassNamesFor("stock")}
                >
                  Summary
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
        <div>
          <h1>Event List</h1>
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
export default EventList;

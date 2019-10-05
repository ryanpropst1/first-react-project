import React from "react";
// import logo from "./logo.svg";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import uuid from "uuid";
import axios from "axios";
class App extends React.Component {
  state = {
    todos: []
    // [
    //   {
    //     id: uuid.v4(),
    //     title: "Take out the trash",
    //     completed: false
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: "Call AT&T about internet",
    //     completed: true
    //   },
    //   {
    //     id: uuid.v4(),
    //     title: "Get Almond Butter at Walmart",
    //     completed: false
    //   }
    // ]
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      // .then(res => console.log(res.data));
      .then(res => this.setState({ todos: res.data }));
  }

  //Mark Complete Toggle Complete each item
  markComplete = id => {
    // console.log("from app.js");
    // console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    // console.log(id);
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      // this.setState({
      //   // todos: [...this.state.todos.filter(todo => todo.id !== id)]
      // });
      .then(
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      );
  };
  // Add Todo

  addTodo = title => {
    // console.log(title);
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      // this.setState({ todos: [...this.state.todos, newTodo] });
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };
  render() {
    // console.log(this.state.todos); // can view object in chrome dev tools in console now
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

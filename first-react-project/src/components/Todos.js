import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends React.Component {
  // markComplete = () => {
  //   console.log("Hello");
  // };
  render() {
    // console.log(this.props.todos);
    // return this.props.todos.map(todo => <h3>{todo.title}</h3>);
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
    // (
    // {
    /* <div>
        <h1>To Do List</h1>
      </div>
    ); */
    // }
  }
}

// PropTypes

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};
export default Todos;

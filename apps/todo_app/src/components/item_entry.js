import React, { Component } from "react";
import TodoList from "./todo_list";

export default class ItemEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user input
      todo: "",
      todoList: [],
    };
    this.getInputValue = this.getInputValue.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.completeTodo = this.completeTodo.bind(this);
  }

  // Get todo item from textfield
  getInputValue(event) {
    this.setState({ todo: event.target.value });
  }

  // Add a todo item to the list
  addTodo(event) {
    event.preventDefault();
    if (this.state.todo.length > 0) {
      this.setState({ todoList: this.state.todoList.concat(this.state.todo) });
      this.setState({ todo: "" });
    }
  }

  // Mark todo as complete, remove from list
  completeTodo(index) {
    const updatedTodoList = this.state.todoList.filter(function (
      _value,
      _index,
      _arr
    ) {
      return _index !== index;
    });
    this.setState({ todoList: [...updatedTodoList] });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input
            id="todo-field"
            type="text"
            placeholder="Todo"
            value={this.state.todo}
            onChange={this.getInputValue}
          />
          <input type="submit" value="Add" />
        </form>
        <TodoList
          length={this.state.todoList.length}
          todoList={this.state.todoList}
          completeTodo={this.completeTodo}
        ></TodoList>
      </div>
    );
  }
}

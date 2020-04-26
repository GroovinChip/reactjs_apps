import React, { Component } from 'react';
import TodoItem from './todo_item';

// Display the items in the todo list
export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { length, todoList, completeTodo } = this.props;
    return (
      <div>
        {length > 0 ? (
          <TodoItem todoList={todoList} completeTodo={completeTodo}></TodoItem>
        ) : (
          ''
        )}
      </div>
    );
  }
}

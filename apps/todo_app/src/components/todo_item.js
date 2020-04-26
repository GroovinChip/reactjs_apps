import React, { Component } from "react";

// A todo item
export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todoList, completeTodo } = this.props;
    return (
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {todoList.map((item, index) => (
          <li key={index.toString()}>
            <input
              type="checkbox"
              checked={false}
              onChange={() => completeTodo(index)}
            ></input>
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

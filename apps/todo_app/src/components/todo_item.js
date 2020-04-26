import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';

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
          listStyleType: 'none',
        }}
      >
        {todoList.map((item, index) => (
          <li key={index.toString()}>
            <Checkbox
              type='checkbox'
              style={{ color: 'white' }}
              checked={false}
              onChange={() => completeTodo(index)}
            ></Checkbox>
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

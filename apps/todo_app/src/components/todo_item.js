import React, { Component } from 'react';
import { Checkbox, Typography } from '@material-ui/core';

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
          padding: '0px',
        }}
      >
        {todoList.map((item, index) => (
          <Typography key={index.toString()}>
            <li>
              <Checkbox
                type='checkbox'
                checked={false}
                color={'primary'}
                onChange={() => completeTodo(index)}
              ></Checkbox>
              {item}
            </li>
          </Typography>
        ))}
      </ul>
    );
  }
}

import React, { Component } from "react";
import { TextField } from "@material-ui/core";

export default class TodoField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <TextField
        id="todo-field"
        variant="outlined"
        margin="dense"
        type="text"
        label="Todo"
        value={this.props.todo}
        onChange={this.props.getInputValue}
      />
    );
  }
}

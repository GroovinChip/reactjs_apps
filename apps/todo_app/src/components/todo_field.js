import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {},
  input: {
    color: '#gray',
  },
};

function TodoField(props) {
  const { classes } = props;

  return (
    <TextField
      className={classes.root}
      InputLabelProps={{
        className: classes.input,
      }}
      id='todo-field'
      variant='outlined'
      margin='dense'
      type='text'
      label='Todo'
      value={props.todo}
      onChange={props.getInputValue}
    />
  );
}

TodoField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoField);

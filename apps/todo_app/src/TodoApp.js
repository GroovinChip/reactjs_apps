import React, { useState } from 'react';
import ItemEntry from './components/item_entry';
import { Typography } from '@material-ui/core';

function TodoApp() {
  return (
    <div>
      <Typography variant='h5'>Todo App</Typography>
      <ItemEntry />
    </div>
  );
}

export default TodoApp;

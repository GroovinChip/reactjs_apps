import React from 'react';
import ItemEntry from './components/item_entry';
import { Typography, CssBaseline, Grid } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const appTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3d5afe',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          margin: '8px',
        },
      },
    },
  },
});

function TodoApp() {
  return (
    <div>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Grid
          container
          spacing={0}
          align='center'
          justify='center'
          direction='column'
        >
          <Typography variant='h5'>Todo App</Typography>
          <ItemEntry />
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default TodoApp;

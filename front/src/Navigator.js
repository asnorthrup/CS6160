import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
class Navigator extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div style={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{flexGrow: 1}} color="inherit">
              Sketch
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }

}

export default Navigator;
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Menu from '@material-ui/core/Menu'
import IconButton from '@material-ui/core/IconButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static" >
          <ToolBar>
            <IconButton>
              <Menu />  
            </IconButton>
            <h3>CP Code Tracker</h3>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default App;

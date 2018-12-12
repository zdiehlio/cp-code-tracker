import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Menu from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import superagent from 'superagent'
import './App.css';

class App extends Component {
  state = {
    drawer: false,
  }

  componentWillMount(){
    superagent.get(`https://damp-beyond-68108.herokuapp.com/`)
      .then(res => console.log(res.text))
  }

  handleClick = () => {
    this.setState({ drawer: this.state.drawer === false ? true : false})
    console.log(this.state.drawer)
  }
  render() {
    return (
      <div className="App">
        <AppBar position="static" >
          <ToolBar>
            <IconButton onClick={this.handleClick}>
              <Menu />  
            </IconButton>
            <h3>CP Code Tracker</h3>
          </ToolBar>
        </AppBar>
        <Drawer open={this.state.drawer} onClose={this.handleClick} >
          <div 
            tabIndex={0}
            role='button'
            onClick={this.handleClick}
            onKeyDown={this.handleClick}
          >
          Some Stuff
          </div>
        </Drawer>
      </div>
    );
  }
}

export default App;

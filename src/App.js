import React, { Component } from 'react';
import ToolBar from '@material-ui/core/Toolbar'
import Menu from '@material-ui/icons/Menu'
import superagent from 'superagent'
import { database } from './firebase'
import './App.css';
import Signup from './components/Signup'
import { Button, Drawer, IconButton, AppBar } from '@material-ui/core';

class App extends Component {
  state = {
    drawer: false,
    data: null,
    newData: ''
  }

  componentDidMount(){
    // superagent.get(`https://damp-beyond-68108.herokuapp.com/`)
    //   .then(res => console.log(res.text))
    //whenever any value changes, fire callback
    database.ref('/').on('value', (snapshot) => {
      console.log(snapshot.val().name)
      this.setState({ data: snapshot.val().newData})
    })
  }

  handleClick = () => {
    this.setState({ drawer: this.state.drawer === false ? true : false})
    console.log(this.state.drawer)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // const newData = database.ref().child('newData').set(this.state.newData)
    const newData = database.ref().child('newData').push(this.state.newData)

  }

  handleChange = (event) => {
    this.setState({ newData: event.target.value})
  }

  render() {
    console.log(this.state.newData)
    return (
      <div className="App">
        <AppBar position="static" >
          <ToolBar>
            <IconButton onClick={this.handleClick}>
              <Menu />  
            </IconButton>
            <h3>CP Code Tracker</h3>
            <div>{this.state.newData.map(val => val)}</div>
          </ToolBar>
          <Button>Login</Button>
          <Button>Logout</Button>
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
        <div color='black'>{this.state.data}</div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.newData} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;

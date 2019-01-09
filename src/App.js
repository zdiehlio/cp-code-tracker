import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Menu from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import Drawer from '@material-ui/core/Drawer'
import { database, auth, googleAuthProvider } from './firebase'
import Signin from './components/Signin'
import './App.css';

class App extends Component {
  state = {
    drawer: false,
    data: null,
    newData: '',
    currentUser: null
  }

  componentDidMount(){
    // database.ref('/').on('value', (snapshot) => {
    //   console.log(snapshot.val().name)
    //   this.setState({ data: snapshot.val().newData})
    // })
    auth.onAuthStateChanged(currentUser => {
      this.setState({ currentUser })
    })
  }

  handleClick = () => {
    this.setState({ drawer: this.state.drawer === false ? true : false})
    console.log(this.state.drawer)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newData = database.ref().child('newData').set(this.state.newData)
    // const newData = database.ref().child('newData').push(this.state.newData)

  }

  handleChange = (event) => {
    this.setState({ newData: event.target.value})
  }

  handleAuth = () => {
    this.state.currentUser ? auth.signOut() : auth.signInWithPopup(googleAuthProvider)
    auth.onAuthStateChanged(currentUser => {
      console.log('AUTH_CHANGED', currentUser)
      this.setState({ currentUser })
    })
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <div className="App">
        <AppBar position="static" >
          <ToolBar>
            <IconButton onClick={this.handleClick}>
              <Menu />  
            </IconButton>
            <h3>CP Code Tracker</h3>
            <Signin handleAuth = {this.handleAuth} currentUser ={this.state.currentUser} />
          </ToolBar>
        </AppBar>
        
        {/* <Drawer open={this.state.drawer} onClose={this.handleClick} >
          <div 
            tabIndex={0}
            role='button'
            onClick={this.handleClick}
            onKeyDown={this.handleClick}
          >
          Some Stuff
          </div>
        </Drawer> */}
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

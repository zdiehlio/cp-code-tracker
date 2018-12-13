import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core';
import superagent from 'superagent'

class Signup extends Component {

  state = {
    email: '',
    token: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    superagent.post('http://localhost:8080/signup')
      .send({email: this.state.email})
      .then(result => console.log(result.body))
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <TextField onChange={this.handleChange} name='email' placeholder='Email'></TextField>
        <Button type='submit'>Submit</Button>
      </form>
    )
  }
}

export default Signup
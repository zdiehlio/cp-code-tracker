import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './Signin.css'

const Signin = (user) => {
  return(
    <div className = 'signin'>
      {!user.currentUser ? 
        <Button onClick={user.handleAuth}>Sign In</Button> : 
        <Button onClick = {user.handleAuth}>SignOut</Button>
      }
    </div>
  )
}

export default Signin
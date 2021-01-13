import React, { Component } from 'react'

import {
  TextField,
  Button,
  Container
} from '@material-ui/core'

class Login extends Component {
  state = {
    username: '',
    password: '',
    login:"Start"
  }

 

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  

  login = (e) => {
    e.preventDefault()
 
    const payload = { ...this.state }

    this.props.updateUserInfo(payload)
    document.cookie = "loggedIn=true;max-age=60*1000*5"
    this.props.history.push('/')
    
  }

 

  render() {
   
    
    return (
      <div className="App">
       
        {(this.state.login==="Trying")?<div className="blinking">Loggin In </div>:null}
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="username"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password" />
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">Login</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default Login;

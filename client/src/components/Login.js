import React, { Component } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    api.login(this.state.email, this.state.password)
      .then(result => {
        console.log('SUCCESS!')
        this.props.history.push("/connect") // Redirect to the connect page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {   
    return (
      <div className="Login">
        <form>
          Email: <br/> <input type="text" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} /> <br/><br/> 
          Password: <br/> <input type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}}  /> <br/> <br/>
          <Button bsStyle="primary" onClick={(e) => this.handleClick(e)}>Log in</Button><br />
          <hr/>
        Don't have a profile yet? Then sign up <Link to="/signup">here</Link>.
        </form>
      </div>
    );
  }
}

export default Login;

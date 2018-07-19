import React, { Component } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      name: "",
      password: "",
      pictureUrl: null,
      bio: "",
      value: "",
      myRole: "",
      errorMessage: "",
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  handleChange(e) {

    this.setState({
      pictureUrl: e.target.files[0]
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
      file: this.state.pictureUrl,
      bio: this.state.bio,
      value: this.state.name,
      myRole: this.state.myRole,
    }
    api.signup(data)
      .then(res => {
        if (res.success === false){

          this.setState({
            errorMessage: res.message
          })
          console.log(res.message)
        }
        else {this.props.history.push("/login")} // Redirect to the login page
      })
      .catch(err => {
        console.log('ERROR')
      })
  }

  render() {   
    return (
      <div className="Signup">
        <form>
        <h2>Sign up and connect</h2><br/> 
          <div>
          Email:<br/> <input  type="text" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} /> <br/><br/> 
          Name: <br/><input type="text" value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}} /> <br/><br/> 
          Password: <br/><input type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}}  /> <br/><br/> 
          Profile picture: <input className="profile-picture" type="file" onChange={(e)=>this.handleChange(e)} /> <br/><br/> 
          Bio: <br/> <input type="text" value={this.state.bio} onChange={(e) => {this.handleInputChange("bio", e)}} /> <br/><br/> 
          Your role: <br/> <input type="text" value={this.state.myRole} onChange={(e) => {this.handleInputChange("myRole", e)}} /> <br/><br/> 
          <Button bsStyle="primary" onClick={(e) => this.handleClick(e)}>Signup</Button><br />
          <hr/>
        Already have a profile? Then log in <Link to="/login">here</Link>.
          </div>
        </form>
        <div>{ this.state.errorMessage }</div>
      </div>
    );
  }
}

export default Signup;
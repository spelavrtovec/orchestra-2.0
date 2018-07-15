import React, { Component } from 'react';
import api from '../api';

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
        <h2>Signup</h2>
        <form>
          Email: <input  type="text" value={this.state.email} onChange={(e) => {this.handleInputChange("email", e)}} /> <br/>
          Name: <input type="text" value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}} /> <br/>
          Password: <input type="password" value={this.state.password} onChange={(e) => {this.handleInputChange("password", e)}}  /> <br/>
          Profile picture: <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          Bio:  <input type="text" value={this.state.bio} onChange={(e) => {this.handleInputChange("bio", e)}} /> <br/>
          Your role:  <input type="text" value={this.state.myRole} onChange={(e) => {this.handleInputChange("myRole", e)}} /> <br/>
          <button onClick={(e) => this.handleClick(e)}>Signup</button>
        </form>
        <div>{ this.state.errorMessage }</div>
      </div>
    );
  }
}

export default Signup;

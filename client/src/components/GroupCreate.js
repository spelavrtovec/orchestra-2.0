import React, { Component } from 'react';
import api from '../api';
import MultiSelectField from './Multiselect';

class GroupCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // _members: [],
      name: "",
      place: "",
      info: "",
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      // _members: this.state._members,
      name: this.state.name,
      place: this.state.place,
      info: this.state.info,
    }
    api.newGroup(data)
      .then(res => {
        if (res.success === false){
          this.setState({
            errorMessage: res.message
          })
        }
        else {this.props.history.push("/connect")} // Redirect to the connect page
      })
      .catch(err => {
        console.log('ERROR!!!!!!')
      })
  }

  render() {   
    return (
      <div className="GroupCreate">
        <h2>Create a new group</h2>
        <form>
          Name of the group: <input type="text" value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}} /> <br/>
          Place: <input type="text" value={this.state.place} onChange={(e) => {this.handleInputChange("place", e)}} /> <br/>
          Some additional information: <input type="text" value={this.state.info} onChange={(e) => {this.handleInputChange("info", e)}} /> <br/>
          <MultiSelectField />
          <button onClick={(e) => this.handleClick(e)}>Create a new group</button>
        </form>
        <div>{ this.state.errorMessage }</div>
      </div>
    );
  }
}

export default GroupCreate;

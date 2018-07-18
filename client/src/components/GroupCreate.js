import React, { Component } from 'react';
import api from '../api';
import MultiSelectField from './Multiselect';
import { FormGroup, FormControl, Button } from "react-bootstrap";

class GroupCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      place: "",
      info: "",
      _members: [], //getting the selected members
      errorMessage: "",
    }
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  handleClick(e) {
    let data = {
      name: this.state.name,
      place: this.state.place,
      info: this.state.info,
      _members: this.state._members, //getting the selected members
    }
    
    api.newGroup(data)
      .then(res => {
        if (res.success === false){
          this.setState({
            errorMessage: res.message
          })
        }
        else {
          return api.getGroups()
          .then(groups => {
            // Redirect to the connect page
            this.props.history.push("/connect")
          })
          .catch(err => {
            console.log('ERROR!!!!!!')
          })
        } 
      })
  }

  changeX(value) {
    value = value.split(",");
    
    this.setState({
      _members: value //getting the selected members
    })
  }

  render() {   
    return (
      <div className="groupCreate">
        <h2>Create a new group</h2>
        <form>
          Name: 
          <FormGroup>
            <FormControl type="text"  value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}} placeholder="group name here" />
          </FormGroup>
       <br/>
       Attendees:
          <MultiSelectField  value={this.state._members} onChange={this.changeX.bind(this)}/> 
       <br/>
          Place: 
          <FormGroup bsSize="small">
            <FormControl type="text"  value={this.state.place} onChange={(e) => {this.handleInputChange("place", e)}} placeholder="where is it happening?" />
          </FormGroup>
       <br/>
          Some additional information: 
          <FormGroup bsSize="small">
            <FormControl type="text"  value={this.state.info} onChange={(e) => {this.handleInputChange("info", e)}} placeholder="like the repertoire or something" />
          </FormGroup>
       <br/>
          <Button bsStyle="primary" onClick={(e) => this.handleClick(e)}>Create a new group</Button>
        </form>
        <div>{ this.state.errorMessage }</div>
      </div>
    );
  }
}

export default GroupCreate;




import React, { Component } from "react";
import api from '../api';
import { FormControl, FormGroup } from "react-bootstrap";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      groupId: "",
    };
  }

  handleInputChange(stateFieldName, event) {
    let newState = {};
    newState[stateFieldName] = event.target.value;

    this.setState(newState);
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      text: this.state.text,
      groupId: this.props.groupId,
    };
    api
      .newPost(data)
      .then(() => this.props.onAdd())
      .catch(err => {
        console.log("ERROR!!!!!!");
      });
  }

  render() {
    return (
      <div className="Post container">
        <form className="smaller-form">
          <FormGroup>
            <FormControl type="text"  value={this.state.text || ''} onChange={(e) => {this.handleInputChange("text", e)}} placeholder="new post"/>
          </FormGroup>
          <button className="no-button" type="submit" onClick={e => this.handleClick(e)}></button>
        </form>
        <div>{this.state.errorMessage}</div>
      </div>
    );
  }
}

export default AddPost;

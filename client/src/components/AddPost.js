import React, { Component } from "react";
import api from '../api';
import {FormControl, FormGroup} from "react-bootstrap";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleInputChange(stateFieldName, event) {
    let newState = {};
    newState[stateFieldName] = event.target.value;

    this.setState(newState);
  }

  handleClick(e) {
    e.preventDefault();
    let data = {
      text: ""
    };
    api
      .newPost(data)
      .then()
      .catch(err => {
        console.log("ERROR!!!!!!");
      });
  }

  render() {
    return (
      <div className="Post">
        <h2>Create a new post</h2>
        <form>
          Text:{" "}
          <FormGroup bsSize="small">
            <FormControl
              type="text"
              value={this.state.text}
              onChange={e => {
                this.handleInputChange("post", e);
              }}
              placeholder="Small text"/>
          </FormGroup>{" "}
          <br />
          <button onClick={e => this.handleClick(e)}>Post</button>
        </form>
        <div>{this.state.errorMessage}</div>
      </div>
    );
  }
}

export default AddPost;

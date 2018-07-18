import React, { Component } from "react";
import api from '../api';
import { FormControl, FormGroup, Button } from "react-bootstrap";

class AddReply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
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
      postId: this.props.postId,
    };
    api
      .newReply(data)
      .then()
      .catch(err => {
        console.log("ERROR!!!!!!");
      });
  }

  render() {
    return (
      <div className="Reply container">
        <form className="reply-box"  onSubmit={(e) => this.handleClick(e)}>
          <FormGroup> 
            <FormControl type="text"  value={this.state.text || ''} onChange={(e) => {this.handleInputChange("text", e)}} placeholder="new reply"/>
          </FormGroup>
          <Button bsStyle="primary">Post a reply</Button>
        </form>
        <div>{this.state.errorMessage}</div>
      </div>
    );
  }
}

export default AddReply;


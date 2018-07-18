import React, { Component } from "react";
import api from '../api';
import { Button } from "react-bootstrap";

class FileForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileUrl: null,
    }
  }

  handleChange(e) {
    this.setState({
      fileUrl: e.target.files[0]
    })
  }

  handleClick(e) {
    e.preventDefault()
    let data = {
      fileUrl: this.state.fileUrl,
      groupId: this.props.groupId,
    }
    api.addFile(data)
  }
  
  render() {
    return (
      <div>
      <form>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <Button bsStyle="primary" onClick={(e) => this.handleClick(e)}>Add a PDF</Button>
        </form>
      </div>
    );
  }
}

export default FileForm;

import React, { Component } from "react";
import api from '../api';

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
    }
    api.addFile(data)
  }
  
  render() {
    return (
      <div>
      <form>
          <input type="file" onChange={(e)=>this.handleChange(e)} /> <br/>
          <button onClick={(e) => this.handleClick(e)}>Add a PDF</button>
        </form>
       
      </div>
    );
  }
}

export default FileForm;

import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import api from '../api';

class MultiSelectField extends Component {

  constructor(props) {
    super(props);
    this.state = {
      removeSelected: true,
      stayOpen: true,
      value: [],
      options: null,
    };
  }

  componentDidMount() {
    api.connect()
    .then(res => {
      res = res.map((element) => {
        return {
          label: element.name,
          value: element._id,
        }
      }
      )
       this.setState({
        options : res
       })
    })
  }

  handleSelectChange(value) {
    this.setState({ value })
    this.props.onChange(value);//getting the selected members
  } 

  render() {
    return (
      this.state.options && <div className="section">
        <Select
          closeOnSelect={!this.state.stayOpen}
          multi
          onChange={this.handleSelectChange.bind(this)}
          options={this.state.options}
          placeholder="Select your favourite(s)"
          removeSelected={this.state.removeSelected}
          simpleValue
          value={this.state.value} 
        />
      </div>
    );
  }
}

export default MultiSelectField;

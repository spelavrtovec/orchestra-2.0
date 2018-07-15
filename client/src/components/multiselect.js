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
    };
  }

  handleSelectChange(value) {
    console.log("You've selected ", value);
    this.setState({ value });
    this.props.onChange(this.state.value); //getting the selected members
  } 

  render() {
    let options = []
    api.connect()
    .then(res => {
       options = res._members
    })
    const { stayOpen, value } = this.state;

    return (
      <div className="section">
        <Select
          closeOnSelect={!stayOpen}
          multi
          onChange={this.handleSelectChange.bind(this)}
          options={options}
          placeholder="Select your favourite(s)"
          removeSelected={this.state.removeSelected}
          simpleValue
          value={value} 
        />
      </div>
    );
  }
}

export default MultiSelectField;

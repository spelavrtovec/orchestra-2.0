import React, { Component } from "react";
import Select from "react-select";
import "react-select/dist/react-select.css";
import api from '../api';

class MultiSelectField extends Component {
  // let members = _members;
  constructor(props) {
    super(props);
    this.state = {
      removeSelected: true,
      stayOpen: true,
      value: []
    };
  }

  handleSelectChange(value) {
    console.log("You've selected:", value);
    this.setState({ value });
    ///do it here, the other change.
  }

  render() {
    // let options = []
    // api.getMembers()
    // .then(res => {
    //    options = res._members
    // })
    const { stayOpen, value } = this.state;
    const options = [
      {
        value: "marija", //put the actual members in here
        label: "marija" //ALSO PASS THE SELECTED VALUES TO THE PARENT
      },
      {
        value: "ana",
        label: "ana"
      }
    ];

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

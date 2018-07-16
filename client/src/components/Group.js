import React, { Component } from "react";
import AddPost from './AddPost';
import api from '../api';

class Group extends Component {

  constructor(props) {
    super(props)
    this.state = {
      group: null
    }
  }

  componentDidMount() {
    api.getGroup(this.props.match.params.groupId)
    .then(group => {
      this.setState({
        group: group,
      })
    })
  }

  render() {
    console.log("hii ",this.state.group)
    return this.state.group && (
      <div className="group">
     <h4>Group: {this.state.group.group.name}</h4>
        <AddPost />
     
      </div>
    )}
}

export default Group;
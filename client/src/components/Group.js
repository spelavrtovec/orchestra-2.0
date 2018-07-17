import React, { Component } from "react";
import AddPost from './AddPost';
import api from '../api';
import Post from './Post';

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
    return this.state.group && (
      <div className="group">
     <h4>Group: {this.state.group.group.name}</h4>
        <AddPost groupId={this.props.match.params.groupId}/>
        <Post />
      </div>
    )}
}

export default Group;
import React, { Component } from "react";
import AddPost from "./AddPost";
import AddReply from "./AddReply";
import api from "../api";
import { Well, Button } from "react-bootstrap";

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: null,
    };
  }

  componentDidMount() {
    this.updateGroupFromApi()
  }

  updateGroupFromApi() {
    api.getGroup(this.props.match.params.groupId).then(group => {
      this.setState({
        group: group
      });
    });
  }

  deletePost(postId) {
    api.deletePost(postId);

    let newGroup = {...this.state.group}
    newGroup.group.posts = this.state.group.group.posts.filter(e => e._id !== postId)
    this.setState({
      group: newGroup
    })
  }

  render() {
    return (
      this.state.group && (
        <div className="group container">
          <h4>Group: {this.state.group.group.name}</h4>
          <AddPost onAdd={this.updateGroupFromApi.bind(this)} groupId={this.props.match.params.groupId} /> <br />

          {this.state.group.group.posts.map(e => (
            <Well>
              <div key={e._id}>
                {`${e._user.name}: ${e.text}`}
                <Button className="button-pushed"
                  bsSize="xsmall"
                  bsStyle="info"
                  onClick={this.deletePost.bind(this, e._id)}>x
                </Button>
                <AddReply postId={e._id} />
              </div>
            </Well>
          ))}
        </div>
      )
    );
  }
}

export default Group;

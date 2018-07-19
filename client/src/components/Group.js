import React, { Component } from "react";
import AddPost from "./AddPost";
import AddReply from "./AddReply";
import Replies from "./Replies";
import FileForm from "./FileForm";
import api from "../api";
import { Well, Button, Row, Col, Grid } from "react-bootstrap";

class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: null
    };
  }

  componentDidMount() {
    this.updateGroupFromApi();
  }

  updateGroupFromApi() {
    api.getGroup(this.props.match.params.groupId)
    .then(group => {
      this.setState({
        group: group
      });
    });
  }

  deletePost(postId) {
    api.deletePost(postId);

    let newGroup = { ...this.state.group };
    newGroup.group.posts = this.state.group.group.posts.filter(
      e => e._id !== postId
    );
    this.setState({
      group: newGroup
    });
  }

  render() {
    return (
      this.state.group && (
        <div className="Group container">
          <h4>Group: {this.state.group.group.name}</h4>
          <p>{this.state.group.group.info}</p><hr />
          <Grid>
            <Row>
              <Col xs={12} md={8}>
                <AddPost
                  onAdd={this.updateGroupFromApi.bind(this)}
                  groupId={this.props.match.params.groupId}
                />{" "}
                <br />
                {this.state.group.group.posts.map(e => (
                  <Well>
                    <Button
                      className="button-pushed"
                      bsSize="xsmall"
                      bsStyle="danger"
                      onClick={this.deletePost.bind(this, e._id)}
                    >
                      x
                    </Button>
                    <div key={e._id}>
                      {`${e._user.name}: ${e.text}`} <br /> <hr />
                      Replies: <Replies replies={e.replies} />
                      <AddReply postId={e._id} />
                    </div>
                  </Well>
                ))}
              </Col>
              <Col xs={6} md={4}>
                <FileForm groupId={this.props.match.params.groupId} />
                <br />
                All the files:
                <ul className="little-list">
                {this.state.group.group._files.map(e => (
                  <li><a href={e} target="_blank">{e}</a></li>))}
                </ul>
              </Col>
            </Row>
          </Grid>
        </div>
      )
    );
  }
}

export default Group;

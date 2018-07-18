import React, { Component } from "react";
import { Thumbnail, Image } from "react-bootstrap";
import api from "../api";

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: null
    }
  }

  componentDidMount() {
    api.getMembers()
    .then(members => {
      this.setState({
       members: members
      });
    });
  }

  render() {
    return (
      this.state.members &&
      <div className="Members">
      {this.state.members.map(e => 
        <Thumbnail>
          <Image src={e.pictureUrl} circle className="pictureimg"/>
          <p> {e.name}: {e.bio}</p>
        </Thumbnail>
      )}

      </div>
    );
  }
}

export default Members;

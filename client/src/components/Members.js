import React, { Component } from "react";
import { Thumbnail, Image } from "react-bootstrap";
import api from "../api";

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: []
    };
  }

  componentDidMount() {
    api
      .getMembers()
      .then(result => {
        result.json();
      })
      .then(users => {
        let names = users.map(users => {
          return <h3 key={users._id}> {users.name}
          </h3>;
        });
        this.setState({ names: names });
      });
  }

  render() {
    return (
      <div className="Members">
        <Thumbnail>
          <Image src="/thumbnail.png" circle />
          {this.state.names}
          <p> {this.state.names}</p>
        </Thumbnail>
      </div>
    );
  }
}

export default Members;

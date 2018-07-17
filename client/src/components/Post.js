import React from "react";
import api from "../api";
import { Well } from "react-bootstrap";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: null
    }
  }


  componentDidMount() {
    api.getGroup()
    .then(group => {
      this.setState({
      group: group,
      });
    });
  }

  render() {
    return (
      <div>
      {this.state.group.map(e => 
      <Well>
           <p>{`${e}:`}</p>
      </Well>
      )}
      </div>
    );
  }
}

export default Profile;

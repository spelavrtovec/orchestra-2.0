import React from "react";
import api from "../api";
import { Image } from "react-bootstrap";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pictureUrl: "",
      bio: "",
      myRole: ""
    };
  }

  componentDidMount() {
    
    api.getProfile()
    .then(user => {
      this.setState({
        name: user.name,
        pictureUrl: user.pictureUrl,
        bio: user.bio,
        myRole: user.myRole
      });
    });
  }

  render() {
    return (
      <div className="container">
      <Image src={this.state.pictureUrl} circle className="pictureimg"/>
          <h3>{this.state.name}</h3>
          <p>bio: {this.state.bio}</p>
          <p>role: {this.state.myRole}</p>
      </div>
    );
  }
}

export default Profile;

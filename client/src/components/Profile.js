import React, { Component } from "react";
import { Image } from "react-bootstrap";

class Profile extends Component {

  render() {
    return (
      <div className="Profile">
        <Image src="/thumbnail.png" circle />
        <br />
        To change your profile picture:
        <form method="post" enctype="multipart/form-data" action="http://localhost:3030/api/users/:profile/picture">
        <input type="file" name="picture" />
        <input type="submit" value="Upload" />
        </form>
      </div>
    );
  }
}

export default Profile;
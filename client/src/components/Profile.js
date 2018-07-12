import React, { Component } from "react";


class Profile extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <div className="Profile">
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
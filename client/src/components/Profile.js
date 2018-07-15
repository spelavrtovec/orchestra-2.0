import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {

  render() {
    const { user } = this.props;

    return (
      <div className="card profile">
        <div className="card-block">
          <img
            className="img-circle avatar"
            src={user.data.pictureUrl} 
            alt="profile"/>
          <h4 className="card-title">
            Hi {user.data.name}!
          </h4>
          <div className="card-text">

          </div>
        </div>
      </div>
    );
  }

}

Profile.propTypes = {
  user: PropTypes.object.isRequired
};

Profile.defaultProps = {
  user: {
    id: 1,
    data: {
      name: 'Tilen Draksler',
      pictureUrl: 'https://cloud.githubusercontent.com/assets/2637399/19027069/a356e82a-88e1-11e6-87d8-e3e74f55c069.png'
    }
  }
};

export default Profile;





// import React, { Component } from "react";
// import { Image } from "react-bootstrap";

// class Profile extends Component {

//   render() {
//     return (
//       <div className="Profile">
//         <Image src="/thumbnail.png" circle />
//         <br />
//         To change your profile picture:
//         <form method="post" encType="multipart/form-data" action="http://localhost:3030/api/users/:profile/picture">
//         <input type="file" name="picture" />
//         <input type="submit" value="Upload" />
//         </form>
//       </div>
//     );
//   }
// }

// export default Profile;
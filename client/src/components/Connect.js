import React, { Component } from "react";
import api from '../api';
import { Link } from 'react-router-dom';
import GroupCreate from "./GroupCreate";
import GroupList from './GroupList';

class Connect extends Component {

  render() {
    return (
      <div className="Connect container">
        {!api.isLoggedIn() && <Link to="/signup">Signup</Link>}
        {!api.isLoggedIn() && <Link to="/login">Login</Link>}
        <GroupCreate /><br /><br />
        <h2>Your groups</h2>
        <GroupList />
      </div>
    );
  }
}

export default Connect;
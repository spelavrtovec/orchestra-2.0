import React, { Component } from "react";
import api from '../api';
import { Link } from 'react-router-dom';

class Connect extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }

  handleLogoutClick(e) {
    api.logout()
    .then (result => {
      this.props.history.push("/association")
    })
    .catch(err => {
      console.log('ERROR')
    })
  }
  render() {
    return (
      <div className="Connect">
        {!api.isLoggedIn() && <Link to="/signup">Signup</Link>}
        {!api.isLoggedIn() && <Link to="/login">Login</Link>}
        {api.isLoggedIn() && (<Link to="/" onClick={e => this.handleLogoutClick(e)}>Logout</Link>)}
      </div>
    );
  }
}

export default Connect;
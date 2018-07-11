import React, { Component } from "react";
import api from '../api';
import { Link } from 'react-router-dom';
import Multiselect from './Multiselect';

class Connect extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }

  render() {
    return (
      <div className="Connect">
        {!api.isLoggedIn() && <Link to="/signup">Signup</Link>}
        {!api.isLoggedIn() && <Link to="/login">Login</Link>}
        <Multiselect />
      </div>
    );
  }
}

export default Connect;
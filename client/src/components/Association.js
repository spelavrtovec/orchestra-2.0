import React, { Component } from "react";
import api from '../api';
import { Link } from 'react-router-dom';

class Association extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }

  render() {
    return (
      <div className="Association">
        {!api.isLoggedIn() && <Link to="/signup">Signup</Link>}
        {!api.isLoggedIn() && <Link to="/login">Login</Link>}
      </div>
    );
  }
}

export default Association;
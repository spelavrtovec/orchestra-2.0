import React, { Component } from "react";
import api from '../api';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

class Navigation extends Component {
 
  handleLogoutClick(e) {
    api.logout()
    this.props.history.push("/association")
  }

  render() {
    return (
 <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">Home</Link> 
          <Link to="/agenda">Agenda</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/association">Association</Link>
          {api.isLoggedIn() && <Link to="/profile">Profile</Link>}
          {api.isLoggedIn() && <Link to="/connect">Connect</Link>}
          {api.isLoggedIn() && (<Link to="/association" onClick={e => this.handleLogoutClick(e)}>Logout</Link>)}
        </header>
               
      </div>
    )
  }
}

export default Navigation;


{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
  </div>
</nav> */}
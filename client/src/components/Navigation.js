import React, { Component } from "react";
import api from "../api";
import logo from "../logo.png";
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from "react-bootstrap";

class Navigation extends Component {
  handleLogoutClick(e) {
    api.logout();
    this.props.history.push("/association");
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect className="Navigation">
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <NavItem href="/">
                <img src={logo} className="App-logo" alt="logo" />
              </NavItem>
              <NavItem eventKey={1} href="/">
                home
              </NavItem>
              <NavItem eventKey={2} href="/contacts">
                contacts
              </NavItem>
              <NavItem eventKey={2} href="/gallery">
                gallery
              </NavItem>
              <NavItem eventKey={2} href="/projects">
                projects
              </NavItem>
              <NavDropdown
                eventKey={3}
                title="association"
                id="basic-nav-dropdown"
              >
                <MenuItem eventKey={3.1} href="/association">
                  about
                </MenuItem>
                <MenuItem eventKey={3.2} href="/repertoire">
                  repertoire
                </MenuItem>
                <MenuItem eventKey={3.3} href="/members">
                  members
                </MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              {api.isLoggedIn() && (
                <NavItem eventKey={1} href="/connect">
                  connect
                </NavItem>
              )}
              {api.isLoggedIn() && (
                <NavItem eventKey={1} href="/profile">
                  profile
                </NavItem>
              )}
              {api.isLoggedIn() && (
                <NavItem
                  eventKey={2}
                  href="/association"
                  onClick={e => this.handleLogoutClick(e)}
                >
                  log out
                </NavItem>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;

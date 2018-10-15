import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import { CSSTransitionGroup } from "react-transition-group";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      open: false
    };
  }

  handleLogoutClick(e) {
    api.logout();
    this.props.history.push("/association");
  }

  handleClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
      open: !this.state.open
    }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="dd-wrapper-absolute">
        <div className="dd-wrapper">
          <div className="dd-header">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={18}
              height={15}
              strokeWidth={1}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
          <div className="dd-container">
            <CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              {isOpen && (
                <ul className="dd-list">
                  <li key="home">
                    {" "}
                    <Link to="/">home</Link>
                  </li>
                  <li key="contacts">
                    {" "}
                    <Link to="/contacts">contact</Link>
                  </li>
                  <li key="gallery">
                    {" "}
                    <Link to="/gallery">gallery</Link>
                  </li>
                  <li key="association">
                    {" "}
                    <Link to="/association">about</Link>
                  </li>
                  <li key="projects">
                    {" "}
                    <Link to="/projects">projects</Link>
                  </li>
                  <li key="repertoire">
                    {" "}
                    <Link to="/repertoire">repertoire</Link>
                  </li>

                  {api.isLoggedIn() && (
                    <li>
                      <Link eventKey={1} href="/connect">
                        connect
                      </Link>
                    </li>
                  )}
                  {api.isLoggedIn() && (
                    <li>
                      <Link eventKey={1} href="/profile">
                        profile
                      </Link>
                    </li>
                  )}
                  {api.isLoggedIn() && (
                    <li>
                      <Link
                        eventKey={2}
                        href="/association"
                        onClick={e => this.handleLogoutClick(e)}
                      >
                        log out
                      </Link>
                    </li>
                  )}
                </ul>
              )}
            </CSSTransitionGroup>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;

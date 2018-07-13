import React, { Component } from "react";
import { Link } from "react-router-dom";

class Projects extends Component {

  render() {
    return (
      <div className="Projects">
        <Link  to="/projects/amadeo-festival">amadeo festival</Link>
        <Link  to="/projects/orchestra">orchestra</Link>
        <Link  to="/projects/collaborators">collaborators</Link>
      </div>
    );
  }
}

export default Projects;
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Gallery extends Component {

  render() {
    return (
      <div className="Gallery">
      <Link to="/gallery/photos">Photos</Link>
      <Link to="/gallery/videos">Videos</Link>
      </div>
    );
  }
}

export default Gallery;
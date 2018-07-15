import React, { Component } from "react";
import Iframe from "react-iframe";

class Gallery extends Component {

  render() {
    return (
      <div className="Gallery">
          <Iframe
            width="550"
            height="305"
            url="https://www.youtube.com/embed/1ZH2YAcIcng?controls=0&amp;showinfo=0"
            allowFullScreen
            className="oa-iframe"
          />
          <Iframe
            width="550"
            height="305"
            url="https://www.youtube.com/embed/gdfNewiRYUA?rel=0&amp;controls=0&amp;showinfo=0"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="oa-iframe"
          />
          <Iframe
            width="550"
            height="305"
            url="https://www.youtube.com/embed/pwwdDfovw9w?rel=0&amp;controls=0&amp;showinfo=0"
            allowFullScreen
            className="oa-iframe"
          />
          <Iframe
            width="550"
            height="305"
            url="https://www.youtube.com/embed/ygrYVg-kepo?rel=0&amp;controls=0&amp;showinfo=0"
            allowFullScreen
            className="oa-iframe"
          />
          <Iframe
            width="550"
            height="305"
            url="https://www.youtube.com/embed/OtdBoN3rhWM?rel=0&amp;controls=0&amp;showinfo=0"
            allowfullscreen
            className="oa-iframe"
          />
      </div>
    );
  }
}

export default Gallery;

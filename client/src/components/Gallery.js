import React, { Component } from "react";
import {ResponsiveEmbed} from "react-bootstrap";

class Gallery extends Component {

  render() {
    return (
      <div className="Gallery">
        <div style={{ width: 550, height: 'auto' }}>
          <ResponsiveEmbed a16by9>
            <iframe 
            width="550" 
            height="305" 
            align="left" 
            src="https://www.youtube.com/embed/1ZH2YAcIcng?controls=0&amp;showinfo=0" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen 
            title="orchestra amadeo" />
          </ResponsiveEmbed>
        </div>
        <div style={{ width: 550, height: 'auto' }} md={6} mdpull={6} >
          <ResponsiveEmbed a16by9>
            <iframe 
            width="550" 
            height="305" 
            align="left" 
            src="https://www.youtube.com/embed/gdfNewiRYUA?rel=0&amp;controls=0&amp;showinfo=0" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen 
            title="orchestra amadeo" />
          </ResponsiveEmbed>
        </div>
        <div style={{ width: 550, height: 'auto'}}>
          <ResponsiveEmbed a16by9>
            <iframe 
            src="https://www.youtube.com/embed/pwwdDfovw9w?rel=0&amp;controls=0&amp;showinfo=0" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen 
            title="orchestra amadeo" />
          </ResponsiveEmbed>
        </div>
        <div style={{ width: 550, height: 'auto' }}>
          <ResponsiveEmbed a16by9>
            <iframe 
            width="550" 
            height="305" 
            align="left" 
            src="https://www.youtube.com/embed/ygrYVg-kepo?rel=0&amp;controls=0&amp;showinfo=0" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen 
            title="orchestra amadeo" />
          </ResponsiveEmbed>
        </div>
        <div style={{ width: 550, height: 'auto' }}>
          <ResponsiveEmbed a16by9>
            <iframe 
            width="550" 
            height="305" 
            align="left" 
            src="https://www.youtube.com/embed/OtdBoN3rhWM?rel=0&amp;controls=0&amp;showinfo=0" 
            frameBorder="0" 
            allow="autoplay; encrypted-media" 
            allowFullScreen 
            title="orchestra amadeo" />
          </ResponsiveEmbed>
        </div>
      </div>
    );
  }
}

export default Gallery;

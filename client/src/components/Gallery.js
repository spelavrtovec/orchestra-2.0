import React, { Component } from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import { Row, Col, Grid } from "react-bootstrap";

class Gallery extends Component {

  render() {
    return (
      <div className="Gallery">


<Grid>
 <Row className="show-grid">
    <Col md={6} mdPush={6}>
    <div style={{ width: 550, height: 'auto' }} >
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
    </Col>
    <Col md={6} mdPull={6}>
    <div style={{ width: 550, height: 'auto' }} >
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
    </Col>
  </Row>
  <hr/>
  <Row className="show-grid">
    <Col md={6} mdPush={6}>
    <div style={{ width: 550, height: 'auto' }} >
          <ResponsiveEmbed a16by9>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/opTsSZJKrCg?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
          </ResponsiveEmbed>
        </div>
    </Col>
    <Col md={6} mdPull={6}>
    <div style={{ width: 550, height: 'auto' }} >
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
    </Col>
  </Row>

  <hr/>
  <Row className="show-grid">
    <Col md={6} mdPush={6}>
    <div style={{ width: 550, height: 'auto' }} >
          <ResponsiveEmbed a16by9>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ThBksh3n7ps?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
          </ResponsiveEmbed>
        </div>
    </Col>
    <Col md={6} mdPull={6}>
    <div style={{ width: 550, height: 'auto' }} >
          <ResponsiveEmbed a16by9>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ag_oQnMBlgU?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
          </ResponsiveEmbed>
        </div>
    </Col>
  </Row>
</Grid>
      </div>
    );
  }
}

export default Gallery;

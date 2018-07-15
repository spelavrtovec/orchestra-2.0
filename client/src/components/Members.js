import React, { Component } from "react";
import { Thumbnail, Button, Image } from "react-bootstrap";

class Members extends Component {

  render() {
    return (
      <div className="Members">
      <Thumbnail >
      <Image src="/thumbnail.png" circle />
        <h3>Thumbnail label</h3>
        <p>Description</p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
      </div>
    );
  }
}

export default Members;
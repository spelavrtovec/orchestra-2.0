import React, { Component } from "react";

class Replies extends Component {
  render() {
    return (
      <div>
        {this.props.replies.map(e => (
          <div>
            {`${e._user.name}: ${e.text}`}
          </div>
        ))}
        <br />
      </div>
    );
  }
}

export default Replies;

import React, { Component } from "react";
import { Thumbnail, Image, Row, Grid, Col } from "react-bootstrap";
import api from "../api";

class Members extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: null
    }
  }

  componentDidMount() {
    api.getMembers()
    .then(members => {
      this.setState({
       members: members
      });
    });
  }

  render() {
    return (
      this.state.members &&
            <div className="Members">
<Grid>
<Row className="show-grid">
    {this.state.members.map(e => 
     
    <Col xs={12} md={6}>
        <Thumbnail key={e._id} className="cards-Members">
          <Image src={e.pictureUrl} circle className="pictureimg picture-Members"/>
          <div> <b>{e.name}</b><br/> {e.bio}</div>
        </Thumbnail>
        </Col>
 
      )}
      </Row>
</Grid>

      </div>


    );
  }
}

export default Members;

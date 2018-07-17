import React, { Component } from "react";
import api from '../api';
import { Link } from 'react-router-dom';
import GroupCreate from "./GroupCreate";
import GroupList from './GroupList';
import { Row, Col, Grid } from "react-bootstrap";

class Connect extends Component {

  render() {
    return (
      <div className="Connect container">
        {!api.isLoggedIn() && <Link to="/signup">Signup</Link>}
        {!api.isLoggedIn() && <Link to="/login">Login</Link>}
        <Grid>
          <Row>
          <Col xs={12} md={8}>
          <h2>Your groups</h2>
          <GroupList />
          </Col>
          <Col xs={6} md={4}>
          <GroupCreate />
          </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}

export default Connect;

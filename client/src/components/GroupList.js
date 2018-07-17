import React, { Component } from "react";
import api from '../api';
import { Link } from 'react-router-dom';
import { Well } from "react-bootstrap";

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: null
    }
  }

  componentDidMount() {
    api.getGroups()
    .then(groups => {
      this.setState({
       groups: groups
      });
    });
  }

  render() {
  
    return this.state.groups &&
      <div className="GroupList">
        {this.state.groups.map(e => 
      <Well>
           <Link key={e._id} to={`/connect/${e._id}`}>{e.name}<br /></Link>
           <p>{`${e.place}: ${e.info}`}</p>
      </Well>)}
      </div>
  }
}

export default GroupList;
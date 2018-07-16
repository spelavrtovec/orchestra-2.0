import React, { Component } from "react";
import api from '../api';
import { Link } from 'react-router-dom';

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
      console.log("heyyyy ", groups)
      this.setState({
       groups: groups
      });
    });
  }

  render() {
  
    return this.state.groups &&
      <div className="GroupList">
        {this.state.groups.map(e => 
           <Link key={e._id} to={`/connect/${e._id}`}>{e.name}<br /></Link>
        )}
      </div>
  }
}

export default GroupList;
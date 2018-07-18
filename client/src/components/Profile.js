import React from "react";
import api from "../api";
import { Image, FormGroup, FormControl, Button } from "react-bootstrap";


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pictureUrl: "",
      bio: "",
      myRole: ""
    };
  }

  componentDidMount() {
    
    api.getProfile()
    .then(user => {
      this.setState({
        name: user.name,
        pictureUrl: user.pictureUrl,
        bio: user.bio,
        myRole: user.myRole
      });
    });
  }

  handleInputChange(stateFieldName, event) {
    let newState = {}
    newState[stateFieldName] = event.target.value
  
    this.setState(newState)
  }

  handleClick(e) {
    let user = {
      name: this.state.name,
      bio: this.state.bio,
      myRole: this.state.myRole,
    }

    api.updateProfile(user)
    .then(
      
    )
}

  render() {
    return (
      <div className="container">
      <Image src={this.state.pictureUrl} circle className="pictureimg"/>

          <form>
          Name: 
          <FormGroup>
            <FormControl type="text"  value={this.state.name} onChange={(e) => {this.handleInputChange("name", e)}} placeholder="your name" />
          </FormGroup>
       <br/>
       Bio:
       <FormGroup>
            <FormControl type="text"  value={this.state.bio} onChange={(e) => {this.handleInputChange("bio", e)}} placeholder="" />
          </FormGroup>
       <br/>
          Role:
          <FormGroup >
            <FormControl type="text"  value={this.state.myRole} onChange={(e) => {this.handleInputChange("myRole", e)}} placeholder="" />
          </FormGroup>
       <br/>
       <br/>
          <Button bsStyle="primary" onClick={(e) => this.handleClick(e)}>Update your profile</Button>
        </form>
      </div>
    );
  }
}

export default Profile;

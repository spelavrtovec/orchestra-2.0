import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Agenda from './Agenda';
import Contacts from './Contacts';
import Projects from './Projects';
import Gallery from './Gallery';
import Association from './Association';
import Connect from './Connect';
import Profile from './Profile';
import './App.css';


class App extends Component {
  // constructor(props) {
  //   super(props)
  //   api.loadUser();
  // }

  render() {                
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/association" component={Association} />
          <Route path="/agenda" component={Agenda} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/projects" component={Projects} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/connect" component={Connect} />
          <Route path="/profile" component={Profile} />
          <Route render={() => <h2>404</h2>} />
        </Switch> 
      </div>
    );
  }
}

export default App;

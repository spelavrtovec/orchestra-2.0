import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Repertoire from './Repertoire';
import Contacts from './Contacts';
import Projects from './Projects';
import Gallery from './Gallery';
import Association from './Association';
import Connect from './Connect';
import Profile from './Profile';
import Members from './Members';
import './App.css';


class App extends Component {

  render() {                
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/association" component={Association} />
          <Route path="/repertoire" component={Repertoire} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/projects" component={Projects} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/connect" component={Connect} />
          <Route path="/profile" component={Profile} />
          <Route path="/members" component={Members} />
          <Route render={() => <h2>404</h2>} />
        </Switch> 
      </div>
    );
  }
}

export default App;

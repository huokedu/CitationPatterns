import React, {Component} from 'react';

// NPM Modules
import { Switch, Route } from 'react-router-dom';

// Containers
import Home from '../home/';
import About from '../about/';
import Dashboard from '../dashboard/';

export default class  Router extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    );
  }
}

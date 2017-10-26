/***
 * Entry point of the app that renders other containers with react router
 * @
 */

import React, { Component } from 'react';

// NPM Modules
import { withRouter } from 'react-router';

// Router
import Router from '../router/';
import ScrollToTop from '../router/ScrollToTop';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollToTop>
          <Router />
        </ScrollToTop>
      </div>
    );
  }
}

export default withRouter(App);

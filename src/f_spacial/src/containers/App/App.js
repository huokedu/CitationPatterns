/***
 * Entry point of the app that renders other containers with react router
 * @
 */

import React, { Component } from 'react';

// NPM Modules
import { withRouter } from 'react-router';

//Components
import Sidebar from '../sidebar';
import Navbar from '../navbar';

// Assets
import './stylesheets/App.css';

// Router
import Router from '../router/';
import ScrollToTop from '../router/ScrollToTop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      visible:false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility () {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    return (
      <div id="app_frame">
        <Navbar />
        <div id="container">
          <Sidebar />
          <div className="content">
            <ScrollToTop>
              <Router />
            </ScrollToTop>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

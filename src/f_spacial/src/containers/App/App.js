/***
 * Entry point of the app that renders other containers with react router
 * @
 */

import React, { Component } from 'react';

// NPM Modules
import { withRouter } from 'react-router';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

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
      <div className="AppFrame">
        <Grid container direction={'column'} spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Navbar />
          </Grid>
          <div className="NomNomSpace">
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid className="MaxHeight" container direction={'row'} spacing={0}>
                <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                  <Sidebar />
                </Grid>
                <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <ScrollToTop>
                      <Router />
                    </ScrollToTop>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </div>
    );
  }
}

export default withRouter(App);

/***
 * Entry point of the app that renders other containers with react router
 * @
 */

import React, { Component } from 'react';

// NPM Modules


//Components

// Assets
import './stylesheets/Errors.css';

// Actions

class Errors extends Component {
  render() {
    return (
      <div>
        {
          this.props.expanded &&
            <div>
              <h1>{this.props.data.error}</h1>
              <h2>{this.props.data.status}</h2>
            </div>
        }
      </div>
    );
  }
}

export default Errors;

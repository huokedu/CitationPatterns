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
              <h3>{this.props.data.result.error} ({this.props.data.result.status})</h3>
              {this.props.data.result.exception}
            </div>
        }
      </div>
    );
  }
}

export default Errors;

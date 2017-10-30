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
      <div className="card full_widget errors">
        <div className="card_container">
          <div className="card_header">
            {'Errors for query: '}
            <span>
              {this.props.query}
            </span>
          </div>
          <h1>{this.props.data.error}</h1>
          <h2>{this.props.data.status}</h2>
        </div>
      </div>
    );
  }
}

export default Errors;

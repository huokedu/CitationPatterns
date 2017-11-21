/***
 * Entry point of the app that renders other containers with react router
 * @
 */

import React, { Component } from 'react';

// NPM Modules
import {Collapse} from 'react-collapse';

//Components

// Assets
import './stylesheets/Errors.css';

// Actions

class Errors extends Component {
  render() {
    return (
      <Collapse isOpened={this.props.expanded}>
        <div>
          {
            this.props.expanded &&
              <div>
                <h1>{ this.props.data.result.error.status + ' - ' + this.props.data.result.error.message }</h1>
                <h2>{ this.props.data.result.error.exception }</h2>
              </div>
          }
        </div>
      </Collapse>
    );
  }
}

export default Errors;

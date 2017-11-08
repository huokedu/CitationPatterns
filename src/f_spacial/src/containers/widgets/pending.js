import React, { Component } from 'react';

// NPM Modules

// Components

// Assets

class Pending extends Component {
  render() {
    return (
      <div className="pending_body">
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }
}

export default Pending;

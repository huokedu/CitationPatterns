import React, { Component } from 'react';

// NPM Modules

//Components

// Assets
import './stylesheets/Widget.css';

class Loading extends Component {
  render() {
    return (
        <div className="loader">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
        </div>
      );
  }
}

export default Loading;

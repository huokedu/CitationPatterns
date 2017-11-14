import React, { Component } from 'react';

// NPM Modules

//Components

// Assets
import './stylesheets/empty_state.css';

// Actions

class EmptyState extends Component {
  render() {
    // noinspection CheckTagEmptyBody
      // noinspection CheckTagEmptyBody
      // noinspection CheckTagEmptyBody
      // noinspection CheckTagEmptyBody
      // noinspection CheckTagEmptyBody
      // noinspection CheckTagEmptyBody
      return (
      <div className="emptyState">
        <div className="wrap">
          <i className="fa fa-search search-1"></i>
          <i className="fa fa-search search-2"></i>
          <i className="fa fa-search search-3"></i>
          <i className="fa fa-search search-4"></i>
          <div className="items">
            <i className="item fa fa-file-text-o"></i>
            <i className="item fa fa-user-o"></i>
          </div>
        </div>
        <h2 className="emptyStateTitle">We aint found shit.</h2>
        <p className="emptyStateMessage"><em>We searched far and wide and couldn't <br/>find anything matching your search.</em></p>
      </div>
    );
  }
}

export default EmptyState;

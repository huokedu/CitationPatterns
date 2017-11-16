import React from 'react';
//import { bindActionCreators } from 'redux';

// Stylesheets

// NPM Modules

// Assets

// Actions

class StatItem extends React.Component {
  render() {
    return (
      <div className="stat_item">
        <div className="stat_value">
          {this.props.value}
        </div>
        <div className="stat_description">
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default StatItem;

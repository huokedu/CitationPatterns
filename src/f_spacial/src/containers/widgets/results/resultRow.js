import React, { Component } from 'react';

// NPM Modules

//Components

// Assets
import './stylesheets/Results.css';

class ResultRow extends Component {
  render() {
    return (
        <tr>
          <td>{this.props.paper_title}</td>
          <td>{this.props.paper_author}</td>
        </tr>
      );
  }
}

export default ResultRow;

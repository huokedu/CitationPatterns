import React, { Component } from 'react';

// NPM Modules

//Components

// Assets
import './stylesheets/Results.css';

class ResultRow extends Component {
  render() {
    return (
        <tr>
          {this.props.selected && <td className="table_action"><i className="fa fa-arrow-left" aria-hidden="true"></i></td>}
          <td>{this.props.paper_title}</td>
          <td>{this.props.paper_author}</td>
          {this.props.queried && <td className="table_action"><i className="fa fa-arrow-right" aria-hidden="true"></i></td>}
        </tr>
      );
  }
}

export default ResultRow;

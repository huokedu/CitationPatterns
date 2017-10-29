/***
 * Entry point of the app that renders other containers with react router
 * @
 */

import React, { Component } from 'react';

// NPM Modules
import { withRouter } from 'react-router';

//Components

// Assets
import './stylesheets/Results.css';

class Results extends Component {
  render() {
    return (
      <div className="card full_widget results">
        <div className="card_container">
          <div className="card_header">
            Results for query:
          </div>
          <div className="results_container">
            <div className="results_column not_selected">
              <div className="results_column_header">Queried</div>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Authors</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A necessary and sufficient condition in order that a Herbrand interpretation be expressive relative to recursive programs</td>
                    <td>Maria Anders</td>
                    <td className="table_action"><i className="fa fa-arrow-right" aria-hidden="true"></i></td>
                  </tr>
                  <tr>
                    <td>On storage media with after effects</td>
                    <td>H. S. Witsenhausen, A. D. Wyner</td>
                    <td className="table_action"><i className="fa fa-arrow-right" aria-hidden="true"></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="results_column selected">
              <div className="results_column_header">Queried</div>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Authors</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table_action"><i className="fa fa-arrow-left" aria-hidden="true"></i></td>
                    <td>A necessary and sufficient condition in order that a Herbrand interpretation be expressive relative to recursive programs</td>
                    <td>Maria Anders</td>
                  </tr>
                  <tr>
                    <td className="table_action"><i className="fa fa-arrow-left" aria-hidden="true"></i></td>
                    <td>On storage media with after effects</td>
                    <td>H. S. Witsenhausen, A. D. Wyner</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Results);

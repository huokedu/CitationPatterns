/***
 * Entry point of the app that renders other containers with react router
 * @
 */

import React, { Component } from 'react';

// NPM Modules


//Components

// Assets
import './stylesheets/ShowPaper.css';

// Actions

class ShowPaper extends Component {
  render() {
    return (
      <div>
        {this.props.expanded && <div className="results_container">
          <table>
            <thead>
              <tr>
                <th>
                  References
                </th>
              </tr>
            </thead>
            <tbody>
              { this.props.data.references.map((ref, index) => {
                  return (<tr role="row" key={this.props.data.result.id + '' + index}>
                    <td>{ref.published + ', ' + ref.title}</td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
        }
      </div>
    );
  }
}

export default ShowPaper;

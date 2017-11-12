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

  formatReference(ref) {
    let formattedRef = "";
    const authLen  = ref.authors.length;
    ref.authors.map((author, index) => {
      if (index !== 0){
        formattedRef += " ";
      }
      formattedRef += author.author.first_name.charAt(0) + ". " + author.author.last_name;
      if (!(index + 1 === authLen)){
        formattedRef += ","
      }
      return formattedRef
    });
    formattedRef += ": " + ref.published + ', ' + ref.title;
    return formattedRef;
  }

  render() {
    return (
      <div>
        {this.props.expanded && <div className="results_container">
          <table className="ref_table">
            <thead>
              <tr>
                <th>
                  References In:
                </th>
              </tr>
            </thead>
            <tbody>
              { this.props.data.references_in.map((ref, index) => {
                  return (<tr role="row" key={this.props.data.result.id + '' + index}>
                    <td>{this.formatReference(ref)}</td>
                  </tr>
                  )
                })
              }
            </tbody>
          </table>
          <table className="ref_table">
            <thead>
              <tr>
                <th>
                  References Out:
                </th>
              </tr>
            </thead>
            <tbody>
              { this.props.data.references_out.map((ref, index) => {
                  return (<tr role="row" key={this.props.data.result.id + '' + index}>
                    <td>{this.formatReference(ref)}</td>
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

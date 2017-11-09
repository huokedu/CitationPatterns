/***
 * Entry point of the app that renders other containers with react router
 * @
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';


// NPM Modules
import {Collapse} from 'react-collapse';

//Components
import ResultsTable from './resultsTable';

// Assets
import './stylesheets/Results.css';

// Actions

class Results extends Component {
  render() {
    return (
      <div>
        <Collapse isOpened={this.props.expanded}>
          <div className="results_container">
            <div className="results_column not_selected">
              <div className="results_column_header">
                Queried
              </div>
              <ResultsTable data={this.props.data}/>
            </div>
          </div>
        </Collapse>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
})

const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(Results);

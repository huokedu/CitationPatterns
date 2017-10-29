/***
 * Entry point of the app that renders other containers with react router
 * @
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// NPM Modules


//Components
import ResultRow from './resultRow';

// Assets
import './stylesheets/Results.css';

// Actions
import { QueryActions } from '../../../redux/query';

class Results extends Component {
  render() {
    return (
      <div className="card full_widget results">
        <div className="card_container">
          <div className="card_header">
            {'Results for query: '}
            <span>
              {this.props.query.query}
            </span>
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
                  <ResultRow
                    queried
                    paper_title={'A necessary and sufficient condition in order that a Herbrand interpretation be expressive relative to recursive programs'}
                    paper_author={'Maria Anders'}
                  />
                  <ResultRow
                    queried
                    paper_title={'On storage media with after effects'}
                    paper_author={'H. S. Witsenhausen, A. D. Wyner'}
                  />
                </tbody>
              </table>
            </div>
            <div className="results_column selected">
              <div className="results_column_header">Selected</div>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Title</th>
                    <th>Authors</th>
                  </tr>
                </thead>
                <tbody>
                  <ResultRow
                    selected
                    paper_title={'A necessary and sufficient condition in order that a Herbrand interpretation be expressive relative to recursive programs'}
                    paper_author={'Maria Anders'}
                  />
                  <ResultRow
                    selected
                    paper_title={'On storage media with after effects'}
                    paper_author={'H. S. Witsenhausen, A. D. Wyner'}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  query: state.query,
  routing: state.routing,
})

const mapDispatchToProps = (dispatch) => ({
  queryActions: bindActionCreators(QueryActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(Results);

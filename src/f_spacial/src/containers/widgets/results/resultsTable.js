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

class ResultsTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
          </tr>
        </thead>
        <tbody>
          { this.props.data.resultSet.map(((result, i) => {
            return (
              <ResultRow
                key={i}
                queried
                data={result}
              />
            );
            }))
          }
        </tbody>
      </table>
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


export default connect(mapStateToProps, mapDispatchToProps)(ResultsTable);

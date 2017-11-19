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
  constructor(props) {
    super(props);
    let idArray = this.props.data.resultSet.map((result) => {
      return result.paper.id
    });
    let selected = {};
    idArray.forEach((id) => {
      selected[id] = true;
    });

    this.state = {
      selectedPapers: selected
    };
    this.handleCheck = this.handleCheck.bind(this);
  };

  handleCheck (id, isChecked) {
    let newState = Object.assign({}, this.state);
    newState.selectedPapers[id] = isChecked;
    this.setState(newState);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th><input
              type="checkbox"
              name="selected_paper"
              checked={this.state.isSelected}
              onChange={this.handleChange}
            /></th>
          </tr>
        </thead>
        <tbody>
          { this.props.data.resultSet.map(((result, i) => {
            return (
              <ResultRow
                key={i}
                queried
                data={result}
                onChange={this.handleCheck}
              />
            );
          }))}
        </tbody>
      </table>
    );
  }
}


const mapStateToProps = state => ({
  query: state.query,
  routing: state.routing,
});

const mapDispatchToProps = (dispatch) => ({
  queryActions: bindActionCreators(QueryActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(ResultsTable);

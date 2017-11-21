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
      checkAll: true,
      selectedPapers: selected,
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.checkAll = this.checkAll.bind(this);
  };

  handleCheck (id, isChecked) {
    let newState = Object.assign({}, this.state);
    if (this.state.checkAll) {
      newState.checkAll = !this.state.checkAll;
    }
    newState.selectedPapers[id] = isChecked;
    this.setState(newState);
  }

  checkAll () {
    let checkAll = !this.state.checkAll;
    let selectedPapers = {};
    Object.keys(this.state.selectedPapers).forEach((key, index) => {
      selectedPapers[key] = checkAll;
    });
    let newState = Object.assign({},
      {selectedPapers:selectedPapers},
      {checkAll: checkAll});
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
              checked={this.state.checkAll}
              onChange={this.checkAll}
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
                checked = {this.state.selectedPapers[result.paper.id]}
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

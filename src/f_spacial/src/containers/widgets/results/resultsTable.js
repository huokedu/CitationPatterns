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
import { SelectActions } from '../../../redux/select';

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
      allChecked: true,
      selectedPapers: selected,
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.checkAll = this.checkAll.bind(this);
  };

  handleCheck (id, isChecked) {
    let newState = Object.assign({}, this.state);
    if (this.state.allChecked) {
      newState.allChecked = !this.state.allChecked;
    }
    newState.selectedPapers[id] = isChecked;
    this.setState(newState);
  }

  checkAll () {
    let allChecked = !this.state.allChecked;
    let selectedPapers = {};
    Object.keys(this.state.selectedPapers).forEach((key, index) => {
      selectedPapers[key] = allChecked;
    });
    let newState = Object.assign({},
      {selectedPapers:selectedPapers},
      {allChecked: allChecked});
    this.setState(newState);
  }

  getResultRows(results) {
    const resultRows = results.map(((result, i) => {
      return this.getRowFromResult(result,i);
    }));
    return resultRows;
  }

  getRowFromResult(result, i) {
    return (
      <ResultRow
        key={i}
        queried
        data={result}
        checked = {this.state.selectedPapers[result.paper.id]}
        onChange={this.handleCheck}
      />
    );
  }

  getAllSelectedPapers() {
    return Object.keys(this.state.selectedPapers).filter((key) => {
      return this.state.selectedPapers[key];
    })
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
              checked={this.state.allChecked}
              onChange={this.checkAll}
            />
            <a onClick={() => {
                this.props.selectActions.add(this.getAllSelectedPapers());
              }}
            ><i className="fa fa-archive on_click_active" aria-hidden="true"></i></a></th>
          </tr>
        </thead>
        <tbody>
          {   this.getResultRows(this.props.data.resultSet) }
        </tbody>
      </table>
    );
  }
}


const mapStateToProps = state => ({
  query: state.query,
  routing: state.routing,
  select: state.select,
});

const mapDispatchToProps = (dispatch) => ({
  queryActions: bindActionCreators(QueryActions, dispatch),
  selectActions: bindActionCreators(SelectActions, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(ResultsTable);

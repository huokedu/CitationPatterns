import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// NPM Modules

//Components

// Assets
import './stylesheets/Results.css';

// Actions
import { QueryActions } from '../../../redux/query';

class ResultRow extends Component {
  render() {
    return (
        <tr
          className="results_row"
          onClick={() => {
            this.props.queryActions.querySingle(this.props.data.paper.id , this.props.data.paper.title);
          }}
        >
          <td>{this.props.data.paper.title}</td>
          <td>{this.props.data.paper.author}</td>
        </tr>
      );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
})

const mapDispatchToProps = (dispatch) => ({
  queryActions: bindActionCreators(QueryActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultRow);

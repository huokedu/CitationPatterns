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
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.props.onChange(this.props.data.paper.id, event.target.checked);
  };


  render() {
    return (
      <tr className="results_row">
        <td onClick={() => {
          this.props.queryActions.querySingle(this.props.data.paper.id , this.props.data.paper.title);
        }}>
          {this.props.data.paper.title}
        </td>
        <td onClick={() => {
          this.props.queryActions.querySingle(this.props.data.paper.id , this.props.data.paper.title);
        }}>
          {this.props.data.paper.author}
        </td>
        <td>
          <input
            type="checkbox"
            name="selected_paper"
            checked={this.props.checked}
            onChange={this.handleChange}
          />
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
});

const mapDispatchToProps = (dispatch) => ({
  queryActions: bindActionCreators(QueryActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultRow);

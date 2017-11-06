import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// NPM Modules

//Components

// Assets
import './stylesheets/Results.css';

// Actions
import { WidgetActions } from '../../../redux/widgets';

class ResultRow extends Component {
  render() {
    return (
        <tr
          className="results_row"
          onClick={() => {
            this.props.widgetsActions.add({
              type: 'SHOW_PAPER',
              data: this.props
            });
          }}
        >
          <td>{this.props.paper_title}</td>
          <td>{this.props.paper_author}</td>
        </tr>
      );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
})

const mapDispatchToProps = (dispatch) => ({
  widgetsActions: bindActionCreators(WidgetActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultRow);

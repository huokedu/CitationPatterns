import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// NPM Modules

// Components

// Constants
import WidgetType from '../../constants/widgets';

// Assets

// Actions
import { WidgetActions } from '../../redux/widgets';

class WidgetHeader extends Component {

  formatHeader() {
    let headers= {
      type: this.props.widget.header_type,
      description: ""
    };
    switch(this.props.widget.type) {
        case WidgetType.showPaper.name:
          headers.description = this.props.widget.data.result.paper.title;
          break;
        case WidgetType.results.name:
          headers.description = this.props.widget.data.query;
          break;
        case WidgetType.error.name:
          headers.description = this.props.widget.data.query;
          break;
        case WidgetType.pending.name:
          headers.description = 'for Query!';
          break;
        default:
          headers.description = "";
          break;
    }
    return headers;
  }

  render() {
    let headers = this.formatHeader();
    return (
      <div className="card_header">
        {headers.type}
        <span>
          {headers.description}
        </span>
        <div className="card_controls">
          { this.props.expanded ?
            <i
              className="fa fa-compress" aria-hidden="true"
              onClick={this.props.toggleExpand}
            ></i>
            :
            <i
              className="fa fa-expand" aria-hidden="true"
              onClick={this.props.toggleExpand}
            ></i>
          }
          <i
            className="fa fa-times"
            aria-hidden="true"
            onClick={() => this.props.widgetActions.remove(this.props.widget)}
          ></i>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch) => ({
  widgetActions: bindActionCreators(WidgetActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetHeader);

import React, { Component } from 'react';

// NPM Modules

// Components

// Constants
import WidgetTypeNames from '../../constants/widgets';

// Assets

class WidgetHeader extends Component {

  formatHeader() {
    let headers= {
      type: this.props.widget.header_type,
      description: ""
    }
    switch(this.props.widget.type) {
        case WidgetTypeNames.SHOW_PAPER:
          headers.description = this.props.widget.data.paper.title;
          break;
        case WidgetTypeNames.RESULTS:
          headers.description = this.props.widget.data.query;
          break;
        case WidgetTypeNames.ERROR:
          headers.description = this.props.widget.data.query;
          break;
        case WidgetTypeNames.PENDING:
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
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default WidgetHeader;

import React, { Component } from 'react';

// NPM Modules


//Components
import Errors from './errors';
import Results from './results';
import ShowPaper from './show_paper';


// Constants
import WidgetTypeNames from '../../constants/widgets';

// Assets
import './stylesheets/Widget.css';

// Actions

export default class Widget extends Component {

  constructor(props){
    super(props);
    this.state = {
      type : WidgetTypeNames.PENDING,
      expanded: false,
    };
    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    let type = this.props.widget.type;
    let widgetToRender = null;
    switch(type) {
        case WidgetTypeNames.SHOW_PAPER:
          widgetToRender = <ShowPaper expanded={this.state.expanded} data={this.props.widget.data}/>;
          break;
        case WidgetTypeNames.RESULTS:
          widgetToRender = <Results expanded={this.state.expanded} query={this.props.widget.query} data={this.props.widget.data}/>;
          break;
        case WidgetTypeNames.ERROR:
          widgetToRender = <Errors data={this.props.widget.data}/>;
          break;
        case WidgetTypeNames.PENDING:
          widgetToRender =
            <div className="card full_widget">
              <div className="pending_body">
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                <span className="sr-only">Loading...</span>
              </div>
            </div>;
          break;
        default:
          widgetToRender = <div>Nothing to see</div>
          break;
    }
    return (
      <div className="card full_widget results">
        <div className="card_container">
          {widgetToRender}
          <div
            className="card_footer"
            onClick={this.toggleExpand}
          >
            { this.state.expanded ?
              <i className="fa fa-angle-double-up" aria-hidden="true"></i>
              :
              <i className="fa fa-angle-double-down" aria-hidden="true"></i>
            }
          </div>
        </div>
      </div>
        );
  }
}

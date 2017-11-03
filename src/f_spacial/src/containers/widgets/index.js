import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


// NPM Modules


//Components
import Errors from './errors';
import Results from './results';


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
    }
  }

  render() {
    let type = this.props.widget.type;
    let widgetToRender = null;
    switch(type) {
        case WidgetTypeNames.RESULTS:
          widgetToRender = <Results query={this.props.widget.query} data={this.props.widget.data}/>;
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
    return widgetToRender;

  }
}

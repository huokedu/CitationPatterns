import React, { Component } from 'react';

// NPM Modules

//Components
import Errors from './errors';
import Results from './results';
import ShowPaper from './show_paper';
import Pending from './pending';
import WidgetHeader from './widget_header';


// Constants
import WidgetType from '../../constants/widgets';

// Assets
import './stylesheets/Widget.css';

// Actions

export default class Widget extends Component {

  constructor(props){
    super(props);
    this.state = {
      type : WidgetType.pending.name,
      expanded: true,
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
        case WidgetType.showPaper.name:
          widgetToRender = <ShowPaper expanded={this.state.expanded} data={this.props.widget.data}/>;
          break;
        case WidgetType.results.name:
          widgetToRender = <Results expanded={this.state.expanded} data={this.props.widget.data}/>;
          break;
        case WidgetType.error.name:
          widgetToRender = <Errors expanded={this.state.expanded} data={this.props.widget.data}/>;
          break;
        case WidgetType.pending.name:
          widgetToRender = <Pending />;
          break;
        default:
          widgetToRender = <div />;
          break;
    }

    return (
      <div style={this.props.style} className="card full_widget results">
        <div className="card_container">
          <WidgetHeader
            widget={this.props.widget}
            expanded={this.state.expanded}
            toggleExpand={this.toggleExpand}
          />
          {widgetToRender}
        </div>
      </div>
    );
  }
}

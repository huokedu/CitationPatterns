import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Sidebar.css';

// NPM Modules

// Components

// Assets

// Actions
import { WidgetActions, WidgetNames } from '../../redux/widgets';

class Sidebar extends React.Component {

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar_body">
          <ul className="sidebar_menu">
            { WidgetNames.map((name, index) => {
                return (
                  <li key={index} className={"sidebar_menu_item" + (this.props.widgets[name] ? ' current' : '')} onClick={() => this.props.widgetActions.toggle({type:name})}>
                    {name}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  widgets: state.widgets,
  routing: state.routing,
})

const mapDispatchToProps = (dispatch) => ({
  widgetActions: bindActionCreators(WidgetActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

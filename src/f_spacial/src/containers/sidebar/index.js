import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Sidebar.css';

// NPM Modules

// Components

// Assets

// Actions
import { WidgetActions } from '../../redux/widgets';

class Sidebar extends React.Component {

  render() {
      return (
      <div className="sidebar">
        <div className="sidebar_body">
          <ul className="sidebar_menu">
            <li className="sidebar_menu_item">
              <i className="fa fa-comments" aria-hidden="true" />
            </li>
            <li className="sidebar_menu_item">
              <i className="fa fa-list" aria-hidden="true" />
            </li>
            <li className="sidebar_menu_item">
              <i className="fa fa-globe" aria-hidden="true" />
            </li>
            <li className="sidebar_menu_item">
              <i className="fa fa-eye" aria-hidden="true" />
            </li>
            <li className="sidebar_menu_item">
              <i className="fa fa-connectdevelop" aria-hidden="true" />
            </li>
            <li className="sidebar_menu_item">
              <i className="fa fa-history" aria-hidden="true" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  widgets: state.widgets,
  routing: state.routing,
});

const mapDispatchToProps = (dispatch) => ({
  widgetActions: bindActionCreators(WidgetActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

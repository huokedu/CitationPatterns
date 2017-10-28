import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Sidebar.css';

// NPM Modules

// Components
import SearchResults from './results';

// Assets

// Actions
import { ExampleActions } from '../../redux/example';

class Sidebar extends React.Component {

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar_body">
          <ul className="sidebar_menu">
            <li className="sidebar_menu_item current">
              Overview
            </li>
            <li className="sidebar_menu_item">
              Patterns
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
})

const mapDispatchToProps = (dispatch) => ({
  exampleActions: bindActionCreators(ExampleActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

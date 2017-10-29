import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Dashboard.css';

// NPM Modules

// Components
import WorldMap from './map/WorldMap';

// Assets

// Actions
import { ExampleActions } from '../../redux/example';

class Dashboard extends React.Component {

  render() {
    return (
      <div id="dashboard_container">
        <div className="card text">
          <p>This site teaches the CSS fundamentals that are used in any website's layout.</p>
        </div>
        <div className="card graph">
          <WorldMap />
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

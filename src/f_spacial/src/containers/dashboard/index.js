import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Dashboard.css';

// NPM Modules

// Components

// Assets

// Actions
import { ExampleActions } from '../../redux/example';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="Home">
        Wow
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

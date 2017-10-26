import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Navbar.css';

// NPM Modules
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

// Components

// Assets

// Actions

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            SPACIAL
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
})

const mapDispatchToProps = (dispatch) => ({
  //exampleActions: bindActionCreators(ExampleActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

import React from 'react';
import { connect } from 'react-redux';

// Stylesheets
import './stylesheets/Navbar.css';

// NPM Modules
import Grid from 'material-ui/Grid';

// Components
import SearchBar from '../search';

// Assets

// Actions

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Grid container direction={'row'} spacing={0}>
          <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
              <SearchBar />
          </Grid>
          <Grid className="NavbarItem Logo" item xs={6} sm={6} md={6} lg={6} xl={6}>
              SPACIAL
          </Grid>
          <Grid className="NavbarItem Control" item xs={3} sm={3} md={3} lg={3} xl={3}>
              ACM
          </Grid>
        </Grid>
      </div>
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

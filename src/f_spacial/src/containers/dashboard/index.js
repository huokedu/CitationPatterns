import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Dashboard.css';

// NPM Modules
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

// Assets

// Actions
import { ExampleActions } from '../../redux/example';

class Dashboard extends React.Component {

  render() {
    return (
      <div className="Home">
        <Grid className="container" container spacing={0}>
          <Grid item xs={3} sm={3} lg={3}>
            <Paper>SUCH DRAWER</Paper>
          </Grid>
          <Grid item xs={9} sm={9} lg={9}>
            <Paper>WOW</Paper>
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
  exampleActions: bindActionCreators(ExampleActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

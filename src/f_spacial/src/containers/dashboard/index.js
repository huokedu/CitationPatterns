import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Dashboard.css';

// NPM Modules

// Components
import Widget from '../widgets';

// Assets

// Actions
import { ExampleActions } from '../../redux/example';

class Dashboard extends React.Component {

  render() {
    /* TODO: Beautify the widgets rendering process */
    return (
      <div id="dashboard_container">
        { this.props.widgets.widgets.sort(function(x, y){
                return y.created_at - x.created_at;
              }).map((widget, index)=> {
            return <Widget key={index} widget={widget} index={index}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
  widgets: state.widgets
})

const mapDispatchToProps = (dispatch) => ({
  exampleActions: bindActionCreators(ExampleActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

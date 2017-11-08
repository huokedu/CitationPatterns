import React from 'react';
import { connect } from 'react-redux';

// Stylesheets
import './stylesheets/Dashboard.css';

// NPM Modules

// Components
import Widget from '../widgets';

// Assets

// Actions

class Dashboard extends React.Component {

  render() {
    /* TODO: Beautify the widgets rendering process */
    return (
      <div id="dashboard_container">
        { this.props.widgets.widgets.sort(function(x, y){
                return y.created_at - x.created_at;
              }).map((widget, index)=> {
            return <Widget key={widget.created_at} widget={widget} index={index}/>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

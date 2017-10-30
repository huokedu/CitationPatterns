import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Dashboard.css';

// NPM Modules

// Components
import WorldMap from './map/WorldMap';
import Results from '../widgets/results';

// Assets

// Actions
import { ExampleActions } from '../../redux/example';

class Dashboard extends React.Component {

  render() {
    return (
      <div id="dashboard_container">
        { this.props.widgets.widgets.sort(function(x, y){
                return y.created_at - x.created_at;
              }).map((widget, index)=> {
            if(widget.type === 'RESULTS'){
              return <Results key={index} data={widget.data} query={widget.query}/>
            }else {
              return 'WOW';
            }
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

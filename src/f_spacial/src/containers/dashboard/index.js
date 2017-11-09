import React from 'react';
import { connect } from 'react-redux';

// Stylesheets
import './stylesheets/Dashboard.css';

// NPM Modules
import {TransitionMotion, spring, presets} from 'react-motion';

// Components
import Widget from '../widgets';

// Assets

// Actions

class Dashboard extends React.Component {
  // actual animation-related logic
  getDefaultStyles = () => {
    return this.props.widgets.widgets.sort(function(x, y){
                return y.created_at - x.created_at;
              }).map(widget => ({data: widget, key: widget.created_at.toString(), style: {height: 0, opacity: 1}}));
  };

  getStyles = () => {
    return this.props.widgets.widgets.sort(function(x, y){
        return y.created_at - x.created_at;
      })
      .map((widget, i) => {
        return {
          data: widget,
          key: widget.created_at.toString(),
          style: {
            height: spring(350, presets.gentle),
            opacity: spring(1, presets.wobbly),
          }
        };
      });
  };

  willEnter() {
    return {
      height: 0,
      opacity: 1,
    };
  };

  willLeave() {
    return {
      height: spring(0),
      opacity: spring(0),
    };
  };
  render() {
    return (
        <TransitionMotion
            defaultStyles={this.getDefaultStyles()}
            styles={this.getStyles()}
            willLeave={this.willLeave}
            willEnter={this.willEnter}
        >
          { styles =>
            <div id="dashboard_container">
              {styles.map((style) => {
                  return <Widget style={style.style} key={style.data.created_at} widget={style.data}/>
                })
              }
            </div>
          }
        </TransitionMotion>
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

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Sidebar.css';

// NPM Modules

// Components
import SearchResults from './results';
import SearchBar from './search';

// Assets

// Actions
import { ExampleActions } from '../../redux/example';

class Sidebar extends React.Component {

  render() {
    return (
      <div className="SidebarContainer">
        <div className="Drawer_Container">
          <div className="Drawer_Search">
            <SearchBar />
          </div>
          <div className="Drawer_Results">
            <SearchResults results={[{name:"Enclosing methods in perturbed nonlinear operator equations", author:"J W. Schmidt, H Schneider"},{name:"On storage media with after effects",author:"H. S. Witsenhausen, A. D. Wyner"},{name:"The Three-Machine No-Wait Flow Shop is NP-Complete", author:"Hans Röck"}]}/>
          </div>
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

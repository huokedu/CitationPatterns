import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Sidebar.css';

// NPM Modules
import Drawer from 'material-ui/Drawer';


// Components
import SearchResults from './results';
import SearchBar from './search';

// Assets

// Actions
import { ExampleActions } from '../../redux/example';

class Sidebar extends React.Component {

  render() {
    return (
      <Drawer
        type="permanent"
        anchor={'left'}
      >
        <div className="Drawer_Container">
          <div className="Drawer_Search">
            <SearchBar />
          </div>
          <div className="Drawer_Results">
            <SearchResults results={["Paper1","Paper2","Paper3"]}/>
          </div>
        </div>
      </Drawer>
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

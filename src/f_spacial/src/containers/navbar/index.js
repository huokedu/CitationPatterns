import React from 'react';
import { connect } from 'react-redux';

// Stylesheets
import './stylesheets/Navbar.css';

// NPM Modules

// Components
import SearchBar from '../search';

// Assets

// Actions

class Navbar extends React.Component {
  render() {
    return (
      <div id="header">
        <div className="header_item header_search">
          <SearchBar />
        </div>
        <div className="header_item logo">
          <a>Spacial</a>
        </div>
        <div className="header_item">
          ACM
        </div>
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

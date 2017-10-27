import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Navbar.css';

// NPM Modules

// Components
import SearchBar from '../search';

// Assets

// Actions

class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="Navbar">
        <div className="NavbarItem Dataset">
          <SearchBar />
        </div>
        <div className="NavbarItem Logo">SPACIAL</div>
        <div className="NavbarItem Control">ACM</div>
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

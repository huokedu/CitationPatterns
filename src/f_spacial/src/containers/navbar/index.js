import React from 'react';
import { connect } from 'react-redux';

// Stylesheets
import './stylesheets/Navbar.css';

// NPM Modules

// Components
import SearchBar from '../search';
import Dropdown from '../dropdown';

// Assets

// Actions

var DB =[
  {
    name: "ACM"
  },
  {
    name: "DBLP"
  }
]

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectDB = this.handleSelectDB.bind(this);
  }

  handleSelectDB(item){
    console.log(item);
  }

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
          <Dropdown list={DB} selected={DB[0]} handleSelect={this.handleSelectDB}/>
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

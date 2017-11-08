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
    name: "dblp",
    component: <span>DBLP</span>
  },
  {
    name: "citeseerx",
    component: <span>CiteSeer<span style={{verticalAlign: '4px', fontSize : '80%'}}>X</span></span>
  },
  {
    name: "ann",
    component: <span>ANN</span>
  }
]

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selected: DB[0]
    };
    this.handleSelectDB = this.handleSelectDB.bind(this);
  }

  handleSelectDB(item){
    this.setState({
      selected: item
    });
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
        <div className="header_item select_db">
          <Dropdown list={DB} selected={this.state.selected} handleSelect={this.handleSelectDB}/>
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

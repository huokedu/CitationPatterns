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
    component: <span>DBLP</span>,
    stats: {
      nodes: 2384099,
      edges: 10394521
    }
  },
  {
    name: "citeseerx",
    component: <span>CiteSeer<span style={{verticalAlign: '4px', fontSize : '80%'}}>X</span></span>,
    stats: {
      nodes: 2118122,
      selected: 1286659,
      edges: 10595956
    }
  },
  {
    name: "ann",
    component: <span>ANN</span>,
    stats: {
      nodes: 19918,
      edges: 124812,
      diameter: 21,
      average_degree: 12.53,
      largest_connected_component_size: 19712,
    }
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

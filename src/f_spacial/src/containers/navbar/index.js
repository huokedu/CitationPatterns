import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Navbar.css';

// NPM Modules

// Components
import SearchBar from '../search';
import Dropdown from '../dropdown';
import { api_routes } from '../../config/configure_api';

// Assets

// Actions
import { DatasetsActions } from '../../redux/datasets';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      selected: api_routes.datasets[0]
    };
    this.handleSelectDB = this.handleSelectDB.bind(this);
  }

  handleSelectDB(item){
    this.props.datasetsActions.change(item);
  }

  render() {
    return (
      <div id="header">
        <div className="header_item header_search">
          <SearchBar />
        </div>
        <div className="header_item logo">
          <a>{this.props.select.papers.length}</a>
        </div>
        <div className="header_item select_db">
          <Dropdown list={api_routes.datasets} selected={this.props.dataset.api} handleSelect={this.handleSelectDB}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
  dataset: state.dataset,
  select: state.select
});

const mapDispatchToProps = (dispatch) => ({
  datasetsActions: bindActionCreators(DatasetsActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

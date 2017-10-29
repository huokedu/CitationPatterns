import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Search.css';

// NPM Modules

// Assets

// Actions
import { QueryActions } from '../../redux/query';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      query:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({ query: event.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.queryActions.query(this.state.query);
    this.setState({
      query: "",
    });
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Filter!" value={this.state.query} onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
  query: state.query,
})

const mapDispatchToProps = (dispatch) => ({
  queryActions: bindActionCreators(QueryActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

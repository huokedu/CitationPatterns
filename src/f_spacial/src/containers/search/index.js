import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Search.css';

// NPM Modules
import Grid from 'material-ui/Grid';
import Search from 'material-ui-icons/Search';


// Assets

// Actions

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
    console.log(event.target.value);
    this.setState({ query: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state.query);
    // API CALL
  }

  render() {
    return (
      <div className="Search">
        <form>
          <input placeholder="Filter!" />
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

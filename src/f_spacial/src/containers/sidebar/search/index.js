import React from 'react';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

// Stylesheets
import './stylesheets/Search.css';

// NPM Modules
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Search from 'material-ui-icons/Search';
import IconButton from 'material-ui/IconButton';


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
      <form className="Search_Form" onSubmit={this.handleSubmit}>
        <FormControl className="Search_Form_Control">
          <Input id="query" value={this.state.query} onChange={this.handleChange} />
        </FormControl>
        <IconButton color="primary" aria-label="submit" type="submit">
          <Search />
        </IconButton>
      </form>
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

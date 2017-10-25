import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      graph={}
    };
  }

  componenWillMount() {
    // BSP API CALL
  }

  componenDidMount() {
    //BSP GRAPH VON SERVER
    // api CALL
    // callback => change state object
    // this.setState({
    //});

    // Initiales
    // animationen
    // initiale parameter (isDropDownVisible= False)
  }

  componentWillReceiveProps() {

  }


  buttonPressed(){
      isDropDownVisible = true;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to {this.props.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

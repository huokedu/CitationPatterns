import React from 'react';

// Stylesheets
import './stylesheets/Home.css';

// NPM Modules
import { StyleSheet, css } from 'aphrodite';

// Assets
import logo from './resources/logo.svg';

// Actions

class Home extends React.Component {

  render() {
    return (
      <div className="Home">
        <div className={css(styles.header)}>
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Home</h2>
        </div>
        <p className={css(styles.introText)}>
          To get started, edit <code>src/containers/app/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

let styles = StyleSheet.create({
  header: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white',
  },
  introText: {
    'font-size': 'large',
  },
});

export default Home;

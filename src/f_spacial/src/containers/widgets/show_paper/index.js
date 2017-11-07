/***
 * Entry point of the app that renders other containers with react router
 * @
 */

import React, { Component } from 'react';

// NPM Modules


//Components

// Assets
import './stylesheets/ShowPaper.css';

// Actions

class ShowPaper extends Component {
  render() {
    return (
      <div>
        {this.props.expanded && <div className="results_container">
          {'Here could be shown more information for now have a look at some lorem ipsum:  \n \n Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'}
        </div>
        }
      </div>
    );
  }
}

export default ShowPaper;

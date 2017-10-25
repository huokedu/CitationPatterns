import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import MySecondComponent from './MySecondComponent.jsx';

class Comp extends Component {
  render() {
    return (
      <ul>
        <MySecondComponent />
        <MySecondComponent />
        <MySecondComponent />
      </ul>
    );
  }
}

ReactDOM.render(<Comp/>, document.getElementById('root'));

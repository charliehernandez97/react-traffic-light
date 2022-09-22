import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Circle from './Circle';
import Light from './Light';

class App extends Component {

  render() {
    return (
      <Light />
    );
  }
}

render(<App />, document.getElementById('root'));

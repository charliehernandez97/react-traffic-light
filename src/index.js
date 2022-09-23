import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Circle from './Circle';
import Light from './Light';
import Light2 from './Light/Light2';

class App extends Component {

  render() {
    return (
      <><Light />
      <Light2 /></>
    );
  }
}

render(<App />, document.getElementById('root'));

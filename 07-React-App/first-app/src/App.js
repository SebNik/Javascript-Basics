import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './components/start'
import Moin from './components/Moin'
import Print from './components/Print'
import Sum from './components/Sum'

class App extends Component {
  render() {
    return (
    <div className="App">
      <Print name="Niklas" />
      <Sum a="5" b="8" lul="lalala" />
    </div>
    );
  }
}

export default App;

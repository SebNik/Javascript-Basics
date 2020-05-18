import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './components/start'
import Moin from './components/Moin'
import Print from './components/Print'

class App extends Component {
  render() {
    return (
    <div className="App">
      <Print name="Niklas" />
    </div>
    );
  }
}

export default App;

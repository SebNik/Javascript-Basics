import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './components/start'
import Moin from './components/Moin'

class App extends Component {
  render () {
    return (
    <div className="App">
      <Start />
      <Moin />
    </div>
    );
  }
}

export default App;

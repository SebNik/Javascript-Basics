import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Start from './components/start'
import Moin from './components/Moin'
import Print from './components/Print'
import Sum from './components/Sum'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';

class App extends Component {
  render() {
    return (
    <div className="App">
      <ClassClick />
    </div>
    );
  }
}

export default App;

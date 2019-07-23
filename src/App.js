import React, { Component } from 'react';
import CounterComponent from './CounterContainer';
import './App.css';
import Navbar from './NavbarContainer';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Navbar />
        <CounterComponent />
      </div>
    );
  }
}

export default App;

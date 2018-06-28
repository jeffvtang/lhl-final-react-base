import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Report from './Report.js'
import { Router, Link } from "@reach/router"



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to="report">Reports</Link>

        <Router>
          <Report path="report"/>
        </Router>
      </div>
    );
  }
}

export default App;

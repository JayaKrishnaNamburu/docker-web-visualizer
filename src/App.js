import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Dashboard from './components/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Dashboard />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import Filters from "./components/filters"
class App extends Component {

  state={
    periods:Object.keys(data)
  }

  render() {
    return (
      <div className="App">
        Vaibhav
        {this.state.periods.map(entry=>entry)}
        <Filters periods={this.state.periods} />
      </div>
    );
  }
}

export default App;

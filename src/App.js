import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import Filters from "./components/filters";
import Datatable from './components/datatable'
class App extends Component {

  state={
    periods:Object.keys(data)
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-4 filter-section">
            <h3>Sales Data</h3>
            {this.state.periods.map(entry=>entry)}
            <Filters periods={this.state.periods} />
          </div>
          <div class="col-sm-4 filter-section">
            <h3>Sales Data</h3>
            {this.state.periods.map(entry=>entry)}
            <Filters periods={this.state.periods} />
          </div>
          <div class="col-sm-4 filter-section">
            <h3>Sales Data</h3>
            {this.state.periods.map(entry=>entry)}
            <Filters periods={this.state.periods} />
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12 table-section">
            <Datatable initialRows={data[this.state.periods[0]]} />
          </div>
          
        </div>
      </div>
        
        
    );
  }
}

export default App;

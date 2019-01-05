import React, { Component } from 'react';
import './App.css';
import Filters from "./components/filters";
import Datatable from './components/datatable';
import {fetchData} from './action/updateDataAction';
import {FETCHED} from './config/action-constants'
import {connect} from 'react-redux';

export class App extends Component {


  componentDidMount(){
    this.props.fetchCompleteData();
  }

  static getDerivedStateFromProps(props,state){
    return {
      periods: Object.keys(props.completeData)
    }
  }

  render() {
    const {completeData,status} = this.props;
    if(status === FETCHED){
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-4 filter-section">
              <h3>Sales Data</h3>
              {this.state.periods.map(entry=>entry)}
              <Filters periods={this.state.periods} />
            </div>
            <div className="col-sm-4 filter-section">
              <h3>Sales Data</h3>
              {this.state.periods.map(entry=>entry)}
              <Filters periods={this.state.periods} />
            </div>
            <div className="col-sm-4 filter-section">
              <h3>Sales Data</h3>
              {this.state.periods.map(entry=>entry)}
              <Filters periods={this.state.periods} />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 table-section">
              { <Datatable initialRows={completeData[this.state.periods[0]]} /> }
            </div>
          </div>
        </div>
      );
    }else{
      return (<> </>)
    }
    
  }
}

const mapStateToProps = (state) =>{
  return{
    completeData:state.completeDataSection.data,
    status: state.completeDataSection.status
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchCompleteData: (data) => {
      dispatch(fetchData(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


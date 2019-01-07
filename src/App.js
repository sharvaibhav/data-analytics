import React, { Component } from 'react';
import './App.css';
import DurationFilters from "./components/duration-filters";
import Datatable from './components/datatable';
import {fetchData} from './action/updateDataAction';
import {FETCHED} from './config/action-constants'
import {connect} from 'react-redux';
import {periodSorter} from "./config/common";
import PieChart from './components/charts/pie';
import Bar from './components/charts/bar';

export class App extends Component {


  componentDidMount(){
    this.props.fetchCompleteData();
  }

  static getDerivedStateFromProps(props,state){
    return {
      periods: periodSorter(Object.keys(props.completeData))
    }
  }

  render() {
    const {completeData,status,currentPeriod} = this.props;
    if(status === FETCHED){
      return (
        <div className="container">
        
          <div className="row">
            <div className="col-sm-12 filter-section">
            <strong>Duration</strong>
              <DurationFilters periods={this.state.periods} />
            </div>
          </div>

          <div className="row">
            <div className="table-section">
              <Datatable initialRows={completeData[this.props.currentPeriod]} /> 
            </div>
          </div>
          <div className="row">
            <div className="col-sm-5 chart-section">
            <h4 className="text-center"> Quantity Sold Per Product Line {currentPeriod} </h4>
              <PieChart completeData = {completeData} data={completeData[currentPeriod]} animate={{duration: 1000}} currentPeriod={currentPeriod}/>
            </div>
          
            <div className="col-sm-7 chart-section">
            <h4 className="text-center"> Products Sold Per Quarter </h4>
            <Bar data={completeData} periods = {this.state.periods} />
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
    status: state.completeDataSection.status,
    currentPeriod:state.completeDataSection.currentPeriod
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


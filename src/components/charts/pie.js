import React, { Component } from "react";
import {getPieDataFromSelectionData} from "./../../config/pieDataHelper"
import { VictoryPie } from "victory";
import {periodSorter} from "../../config/common";

class PieChart extends Component {
  constructor(props){
    super(props);
    this.state={
      currentSelectionData:this.props.data,
      currentPeriod : this.props.currentPeriod,
      pieData:{},
      completeData: this.props.data,
      allPeriodSorted: periodSorter(Object.keys(props.completeData))
    }
  }
  
  componentDidMount(){
    let {currentSelectionData,currentPeriod,completeData,allPeriodSorted} = this.state;
    let derivedData = getPieDataFromSelectionData(currentSelectionData,currentPeriod,completeData,allPeriodSorted);
    this.setState({pieData:derivedData})
    console.log(derivedData);
  }



  static getDerivedStateFromProps(props,state){
    let {data,currentPeriod,completeData,allPeriodSorted} = props;
    let derivedData = getPieDataFromSelectionData(data,currentPeriod,completeData,allPeriodSorted);
    return {
      currentSelectionData: data,
      pieData:derivedData
    }
  }

  render() {
    return <VictoryPie data = {this.state.pieData} animate={this.props.animate}/>;
  }
}

export default PieChart;
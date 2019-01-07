import React, { Component } from "react";
import {getPieDataFromSelectionData} from "./../../config/pieDataHelper"
import { VictoryPie } from "victory";

class PieChart extends Component {
  constructor(props){
    super(props);
    this.state={
      currentSelectionData:this.props.data,
      pieData:{}
    }
  }
  
  componentDidMount(){
    let {currentSelectionData} = this.state;
    let derivedData = getPieDataFromSelectionData(currentSelectionData);
    this.setState({pieData:derivedData})
    console.log(derivedData);
  }



  static getDerivedStateFromProps(props,state){
    let {data} = props;
    let derivedData = getPieDataFromSelectionData(data);
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
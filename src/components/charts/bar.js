import React, { Component } from "react";
import {getBarDataFromSelectionData} from "./../../config/pieDataHelper"
import { VictoryChart,VictoryBar,VictoryAxis } from "victory";

class Bar extends Component {
  constructor(props){
    super(props);
    this.state={
      completeData:this.props.data,
      barData:{}
    }
  }
  
  componentDidMount(){
    let {currentSelectionData} = this.state;
    let derivedData = getBarDataFromSelectionData(currentSelectionData);
    this.setState({barData:derivedData})
    console.log(derivedData);
  }



  static getDerivedStateFromProps(props,state){
    let {data} = props;
    let derivedData = getBarDataFromSelectionData(data);
    return {
      currentSelectionData: data,
      pieData:derivedData
    }
  }

  render() {
    return <VictoryChart domainPadding={10}>
                <VictoryAxis
                    style={{ 
                    axisLabel: { fontSize: 16 },
                    ticks: { stroke: '#ccc' },
                    tickLabels: { fontSize: 14 },
                    grid: { stroke: '#B3E5FC', strokeWidth: 0.25 }
                    }} dependentAxis
                />
                <VictoryAxis
                    style={{
                    axisLabel: { fontSize: 16 },
                    ticks: { stroke: '#ccc' },
                    tickLabels: { fontSize: 10 }
                    }}
                />
                <VictoryBar style={{ data: { fill: "#c43a31" } }} 
                            data={this.state.pieData} 
                            animate={{duration: 2000,onLoad: { duration: 1000 }}} 
                            style={{
                                data: {
                                  fill: (d) => d.x === 3 ? "#000000" : "#969696",
                                  stroke: (d) => d.x === 3 ? "#000000" : "#636363",
                                  fillOpacity: 0.7,
                                  strokeWidth: 3
                                },
                                tickLabels: {
                                  fontSize: 10
                                  
                                }
                              }}
                            />
            </VictoryChart>;
  }
}

export default Bar;
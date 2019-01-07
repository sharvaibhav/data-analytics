import React,{Component} from 'react';
import {columns} from '../config/datatable-config'
import ReactDataGrid from "react-data-grid";
import {updateCurrentPeriodData} from './../action/updateDataAction';
import {connect} from "react-redux";

class Datatable extends Component{

  state={
    rows:this.props.initialRows,
    cachedprop:null
  }

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      this.props.updateCurrentPeriodData({rows},this.props.currentPeriod);
      
    });
  };

  setRows = (rows)=>{
    this.setState({rows: rows});
  }

  static getDerivedStateFromProps(props,state){
    if(props.initialRows != state.cachedprop){
      return {cachedprop:props.initialRows,rows:props.initialRows};
    }
      else
      return {rows:state.rows};
  }

  sortRows = (initialRows, sortColumn, sortDirection) => rows => {
    const comparer = (a, b) => {
      if (sortDirection === "ASC") {
        return a[sortColumn] > b[sortColumn] ? 1 : -1;
      } else if (sortDirection === "DESC") {
        return a[sortColumn] < b[sortColumn] ? 1 : -1;
      }
    };
    return sortDirection === "NONE" ? initialRows : [...rows].sort(comparer);
  };

  render(){
    const {initialRows} = this.props;
    // const rows = this.state.rows;
    if(this.state.rows && this.state.rows.length>0){
      return(<ReactDataGrid
        columns={columns}
        rowGetter={i => this.state.rows[i]}
        rowsCount={this.state.rows.length}
        minHeight={400}
        onGridRowsUpdated={this.onGridRowsUpdated}
        onGridSort={(sortColumn, sortDirection) =>{
          this.setState({rows:this.sortRows(initialRows, sortColumn, sortDirection)(this.state.rows)});
        }
        }
        enableCellSelect={true}
      />);
    }else{
      return (<> </>)
    }
    
  }
}


const mapStateToProps = (state) =>{
  return{
    currentPeriod:state.completeDataSection.currentPeriod
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    updateCurrentPeriodData: (data,currPeriod) => {
      dispatch(updateCurrentPeriodData(data,currPeriod))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Datatable);

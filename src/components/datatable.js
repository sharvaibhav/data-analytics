import React,{Component} from 'react';
import {ROW_COUNT,columns} from '../config/datatable-config'
import ReactDataGrid from "react-data-grid";

class Datatable extends Component{

  state={
    rows:this.props.initialRows
  }

  onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
    this.setState(state => {
      const rows = state.rows.slice();
      for (let i = fromRow; i <= toRow; i++) {
        rows[i] = { ...rows[i], ...updated };
      }
      return { rows };
    });
  };

  setRows = (rows)=>{
    this.setState({rows: rows});
  }

  static getDerivedStateFromProps(props,state){
    if(props && props.initialRows)
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
        minHeight={500}
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

export default Datatable;

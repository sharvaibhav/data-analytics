import React,{Component} from 'react';
import {connect} from 'react-redux'
import {updatePeriod} from '../action/updateDataAction';
import "./duration-filters.css"

class Filters extends Component {

    render() {
      return (
        <div className="filters btn btn-default" >
          <select className="period-filter" onChange={this.props.durationChange}>
            {this.props.periods.map((entry,index) =>{
                return <option value={entry} key={index}>{entry}</option>
            })}
        </select>
        </div>
      );
    }
  }

  const mapStateToProps = (state) =>{
    return{
      completeData:state.completeDataSection.data,
      period: Object.keys(state.completeDataSection.data),
      status: state.completeDataSection.status
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return {
      durationChange: (e) => {
        dispatch(updatePeriod(e.target.value))
      }
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(Filters);
  
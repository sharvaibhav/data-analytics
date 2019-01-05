import React,{Component} from 'react';

class Filters extends Component {

    render() {
      return (
        <div className="filters">
          <select class="period-filter">
            {this.props.periods.map(entry =>{
                return <option value={entry}>{entry}</option>
            })}
        </select>
        </div>
      );
    }
  }
  
  export default Filters;
import React,{Component} from 'react';

class DataTable extends Component {


defaultColumnProperties = {
  sortable: true,
  width: 120
};

columns = [
  {
    key: "index",
    name: "INDEX",
    sortDescendingFirst: true
  },
  {
    key: "title",
    name: "Title"
  },
  {
    key: "firstName",
    name: "First Name"
  },
  {
    key: "lastName",
    name: "Last Name"
  },
  {
    key: "email",
    name: "Email"
  },
  {
    key: "street",
    name: "Street"
  },
  {
    key: "zipCode",
    name: "ZipCode"
  },
  {
    key: "date",
    name: "Date"
  },
  {
    key: "jobTitle",
    name: "Job Title"
  },
  {
    key: "catchPhrase",
    name: "Catch Phrase"
  },
  {
    key: "jobArea",
    name: "Job Area"
  },
  {
    key: "jobType",
    name: "Job Type"
  }
].map(c => ({ ...c, ...this.defaultColumnProperties }));

ROW_COUNT = 50;

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
  
  export default DataTable;
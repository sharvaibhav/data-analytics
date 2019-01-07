import _ from "lodash";
export const getPieDataFromSelectionData = (currentSelectionData,currentPeriod)=>{
    let dataByProductLine = _.mapValues(_.groupBy(currentSelectionData, 'productline'),clist => clist.map(entry => entry.quantitySold ).reduce((accumulator, currentValue) => accumulator + currentValue));
    let dd =[]
    _.forOwn(dataByProductLine, function(value, key) {
      dd.push({x:key,y:value});
    });
    return dd;
  }

  export const getBarDataFromSelectionData = (currentSelectionData)=>{
    let dataByProductLine = _.mapValues(currentSelectionData,clist => clist.map(entry => entry.quantitySold ).reduce((accumulator, currentValue) => accumulator + currentValue));
    let dd =[]
    _.forOwn(dataByProductLine, function(value, key) {
      dd.push({x:key,y:value});
    });
    return dd;
  }
  
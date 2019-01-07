import _ from "lodash";
export const getPieDataFromSelectionData = (currentSelectionData,currentPeriod,completeData,allPeriodSorted)=>{
    let dataByProductLine = _.mapValues(_.groupBy(currentSelectionData, 'productline'),clist => clist.map(entry => entry.quantitySold ).reduce((accumulator, currentValue) => accumulator + currentValue));
    let dd =[];
    let indexCurPeriod  =  allPeriodSorted.indexOf(currentPeriod);
    if(indexCurPeriod > 0){
      let previosPeriod = allPeriodSorted[indexCurPeriod-1];
      let dataByProductLinePreviousQuarter = _.mapValues(_.groupBy(completeData[previosPeriod], 'productline'),clist => clist.map(entry => entry.quantitySold ).reduce((accumulator, currentValue) => accumulator + currentValue));    
      _.forOwn(dataByProductLine, function(value, key) {
        let perChange = Math.round((Math.abs(value - dataByProductLinePreviousQuarter[key])/value) * 100 * 100) / 100;
        if(!isNaN(perChange) )
          dd.push({x:key,y:value,y1:perChange});
          else
          dd.push({x:key,y:value,y1:0});
      });
    }else{
      _.forOwn(dataByProductLine, function(value, key) {
        dd.push({x:key,y:value,y1:0});
      });
    }
    
    console.log(dd)
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
  
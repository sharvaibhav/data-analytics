/*
 src/reducers/completeDataReducer.js
*/
import {FETCH_DATA,FETCHED,INITIAL,UPDATE_PERIOD,UPDATE_CURRENT_PERIOD_DATA} from '../config/action-constants';

export default (state = {data:{},status:INITIAL,currentPeriod:""}, action) => {
    switch (action.type) {
    case FETCH_DATA:
      return {data:action.payload,status:FETCHED}
      
    case UPDATE_PERIOD:
      return {...state,currentPeriod:action.payload}
    
    case UPDATE_CURRENT_PERIOD_DATA:
      let {data} = {...state};
      let newData = {...data};
      newData[state.currentPeriod] = action.payload.rows; 
      return {...state,data:newData}
     default:
      return state
    }
   }
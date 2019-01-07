/*
 src/reducers/completeDataReducer.js
*/
import {FETCH_DATA,FETCHED,INITIAL,UPDATE_PERIOD} from '../config/action-constants';

export default (state = {data:{},status:INITIAL,currentPeriod:""}, action) => {
    switch (action.type) {
    case FETCH_DATA:
      return {data:action.payload,status:FETCHED}
      
    case UPDATE_PERIOD:
      return {...state,currentPeriod:action.payload}
     default:
      return state
    }
   }
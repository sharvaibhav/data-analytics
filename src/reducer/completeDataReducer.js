/*
 src/reducers/completeDataReducer.js
*/
import {FETCH_DATA,FETCHED,INITIAL} from '../config/action-constants';

export default (state = {data:{},status:INITIAL}, action) => {
    switch (action.type) {
     case FETCH_DATA:
      return {data:action.payload,status:FETCHED}
      
     default:
      return state
    }
   }
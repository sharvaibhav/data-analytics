/*
 src/actions/updateDataAction.js
*/
import {FETCH_DATA} from '../config/action-constants';
import data from "../data.json";

export const fetchData = () => (dispatch,state) => {
    console.log(state);
    dispatch({
     type: FETCH_DATA,
     payload: data
    })
   }
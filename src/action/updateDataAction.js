/*
 src/actions/updateDataAction.js
*/
import {FETCH_DATA,UPDATE_PERIOD} from '../config/action-constants';
import data from "../data.json";

export const fetchData = () => (dispatch,state) => {
    console.log(state);
    dispatch({
     type: FETCH_DATA,
     payload: data
    })
    dispatch({
        type: UPDATE_PERIOD,
        payload: Object.keys(data)[0]
       })
}

export const updatePeriod = (data) => (dispatch,state) => {
    console.log(state);
    dispatch({
     type: UPDATE_PERIOD,
     payload: data
    })
}
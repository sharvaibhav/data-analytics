/*
 src/actions/updateDataAction.js
*/
import {FETCH_DATA,UPDATE_PERIOD,UPDATE_CURRENT_PERIOD_DATA} from '../config/action-constants';
import data from "../data.json";

export const fetchData = () => (dispatch,state) => {
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
    dispatch({
     type: UPDATE_PERIOD,
     payload: data
    })
}

export const updateCurrentPeriodData = (data,period) => (dispatch,state) => {
    //let completeData = state().completeDataSection;
    dispatch({
     type: UPDATE_CURRENT_PERIOD_DATA,
     payload: data
    })
}
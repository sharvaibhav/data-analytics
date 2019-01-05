/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import simpleReducer from './simplereducer';
import completeData from './completeDataReducer';

export default combineReducers({
 simpleReducer,
 completeDataSection : completeData
});
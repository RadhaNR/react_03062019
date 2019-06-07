import {combineReducers} from 'redux';
import employeeReducer from './employeeReducer.js';

const rootReducer = combineReducers({
    employee: employeeReducer
})

export default rootReducer;
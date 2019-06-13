import * as actionTypes from '../actions/actionTypes.js';
const initialValue = [];

const employeeReducer = (state = initialValue, action) => {
    console.log("in reducer", action)
    switch (action.type) {
        case actionTypes.ADD_EMPLOYEE:
            return [...state, action.employee];
            break;
        case actionTypes.DELETE_EMPLOYEE:
            return state.filter((employee => employee.sapId !== action.sapId));
            break;
        default:
            return state;
    }
}


export default employeeReducer;
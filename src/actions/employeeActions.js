
import * as actionTypes from './actionTypes.js';

export const addEmployee = (employee) => {
    console.log("inaction", employee)
    return {
        type: actionTypes.ADD_EMPLOYEE,
        employee
    }
}


export const deleteEmployee  = (sapId)=> {
    console.log("in action", sapId)
    return {
        type: actionTypes.DELETE_EMPLOYEE,
        sapId
    }
}
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
//import { composeWithDevTools } from 'redux-devtools-extension';

const logger = state => next => action => {
    console.log("in Middleware", action)
    // if(action.type==='DELETE_EMPLOYEE') {
    //     action.type = "ADD_EMPLOYEE";
    //     action.employee = {
    //         userName: "Testing Middleware",
    //         sapId: "231232131231323"
    //     }
    // }
    console.log("Before", state.getState())
   const result = next(action);
   console.log("After", state.getState())
   return result;
}
const configStore = (initial) => {
    //return createStore(rootReducer, initial, composeWithDevTools() );
    return createStore(rootReducer, initial, applyMiddleware(logger)) ;
}

export default configStore;
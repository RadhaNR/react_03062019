import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
const logger = store=>next=>action=> {
    console.log("dispatching action", action)
    console.log("Before store: ", store.getState())
    let result = next(action);
    console.log("After store: ", store.getState())
    //return result;
}

const configStore = (initial) => {
    return createStore(rootReducer, initial, composeWithDevTools(applyMiddleware(logger)) );
}

export default configStore;
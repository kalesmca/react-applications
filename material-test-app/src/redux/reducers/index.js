import customerReducer from "./customers";
import transactionReducer from "./transaction";

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    customers:customerReducer,
    transactions:transactionReducer
})

export default rootReducer;
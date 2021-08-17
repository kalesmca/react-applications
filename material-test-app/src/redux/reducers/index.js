import productReducer from "./products";
import customerReducer from "./customers";

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    products: productReducer,
    customers:customerReducer
})

export default rootReducer;
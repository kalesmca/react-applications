import {combineReducers} from 'redux';
import customers from './customers';
import productReducer from './products';
import orders from './orders';
import billing from './billing';

const rootReducer = combineReducers({
    products: productReducer,
    orders,
    customers,
    billing
})

export default rootReducer;


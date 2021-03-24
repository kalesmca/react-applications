import {combineReducers} from 'redux';
import modalReducer from './modals';

const rootReducer = combineReducers({
    modals:modalReducer
})

export default rootReducer;
import {combineReducers} from 'redux';
import modalReducer from './modals';
import materials from './materials';

const rootReducer = combineReducers({
    modals:modalReducer,
    materials
})

export default rootReducer;
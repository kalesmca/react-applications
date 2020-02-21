import {combineReducers} from 'redux';
import userInfoReducer from './userInfoReducer';

const allReducers = combineReducers(
    {
        userInfoReducer
    }
)

export default allReducers;
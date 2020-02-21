import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import allReducers from './reducers/index';

export default createStore(allReducers, applyMiddleware(logger))
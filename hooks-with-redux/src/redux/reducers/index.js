import {combineReducers} from 'redux';

import cakeReducer from './cake.reducer';
import iceReducer from './icecream.reducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    ice: iceReducer
})

export default rootReducer;
import memberReducer from './member';
import eventReducer from './evets';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    events: eventReducer,
    members: memberReducer
})

export default rootReducer;
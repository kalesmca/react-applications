import MOCK_EVENTS from '../../data/EVENTS_MOCK.json';

const initialState = {
    eventList: MOCK_EVENTS
}

const eventReducer = (state=initialState, action) =>{
    console.log('events Reducer :', state, action)
    switch(action.type) {
        case 'ADD_EVENT':
            return {...state}
        default:
            return {...state}
    }
}

export default eventReducer;
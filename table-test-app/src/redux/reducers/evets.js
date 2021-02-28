import MOCK_EVENTS from '../../data/EVENTS_MOCK.json';
import {DELETE_EVENTS} from '../../constants';

const initialState = {
    eventList: MOCK_EVENTS,
    headerList: [
        { fieldName: "Organizer", key: "organizer", sortingType : 'all' },
        { fieldName: "About", key: "about" },
        { fieldName: "Schedules For", key: "schedulesFor", sortingType : 'all' },
        { fieldName: "Duration", key: "duration" },
        { fieldName: "Event Name ", key: "eventName" },
        { fieldName: "Capacity ", key: "capacity" },
        
      ]
}

const eventReducer = (state=initialState, action) =>{
    console.log('events Reducer :', state, action)
    switch(action.type) {
        case 'ADD_EVENT':
            return {...state}
        case DELETE_EVENTS:
            return {...state, ...action.tempEventsState}
        default:
            return {...state}
    }
}

export default eventReducer;
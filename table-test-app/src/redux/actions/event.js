import {SORTING_EVENTS, DELETE_EVENTS} from '../../constants';

export const deleteEvent = (appState, index) => {
    let tempEventsState = {...appState.events}
    tempEventsState.eventList.splice(index, 1)
    return {type: DELETE_EVENTS, tempEventsState}
}
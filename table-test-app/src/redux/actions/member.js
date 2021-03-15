import {SORTING_MEMBERS, DELETE_MEMBER, UPDATE_MEMBERS} from '../../constants';
import {updateEvents} from '../actions/event';
import { useDispatch } from "react-redux";

export const sortingMembers = (appState, index) =>{
    let tempMemberState = {...appState.members}
    const sortHeaderData = tempMemberState.headerList[index]
    if(sortHeaderData.key === 'age'){
        tempMemberState.memberList.sort(function (a, b) {
            if(sortHeaderData.sortingType === 'all' || sortHeaderData.sortingType === 'desc'){
                return a.age - b.age 
            } else {
                return b.age - a.age 
            }
          })  
          
    } else {
        tempMemberState.memberList.sort(function(a, b) {
            var nameA = a[sortHeaderData.key].toUpperCase(); // ignore upper and lowercase
            var nameB = b[sortHeaderData.key].toUpperCase(); // ignore upper and lowercase
            if (sortHeaderData.sortingType === 'all' || sortHeaderData.sortingType === 'desc'? nameA < nameB : nameA > nameB) {
              return -1;
            }
            if (sortHeaderData.sortingType === 'all' || sortHeaderData.sortingType === 'desc'? nameA > nameB : nameA < nameB) {
              return 1;
            }
            return 0;
          });
    }
    tempMemberState.headerList[index].sortingType =  sortHeaderData.sortingType === 'all' ? 'asc' : sortHeaderData.sortingType === 'desc' ?  'asc' : 'desc'
    return {type: SORTING_MEMBERS, tempMemberState}
}


export const deleteMember = (appState, index) => {
    let tempMemberState = {...appState.members}
    tempMemberState.memberList.splice(index, 1)
    return {type: DELETE_MEMBER, tempMemberState}
}

export const AddEventsToMember = (appState, rowIndex, selectedEvent, eventList ) => {
  // const dispatch = useDispatch()
  let tempMemberState = {...appState.members}
  let tempEventsState = {...appState.events}
  let eventIndex = tempEventsState.eventList.findIndex((e) => {
    return e.id === selectedEvent[0].id
  })
  
  if(eventIndex >= 0 && tempEventsState.eventList[eventIndex].availability) {
    tempMemberState.memberList[rowIndex].events = eventList
    if(tempEventsState.eventList[eventIndex].availability === 1 ){
      tempEventsState.eventList[eventIndex].isDisabled = true
    }
    tempEventsState.eventList[eventIndex].availability = tempEventsState.eventList[eventIndex].availability-1
    const memberObj = {label: tempMemberState.memberList[rowIndex].name,value: tempMemberState.memberList[rowIndex].name, id: tempMemberState.memberList[rowIndex].id}
    tempEventsState.eventList[eventIndex].members.push(memberObj)
    updateEvents(tempEventsState)
  }
  return {type: UPDATE_MEMBERS, tempMemberState}

}

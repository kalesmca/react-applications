import {SORTING_MEMBERS, DELETE_MEMBER, UPDATE_MEMBERS} from '../../constants';

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

export const addEventsToMember = (appState, rowIndex, selectedEvent, eventList ) => {
  let tempMemberState = {...appState.members}
  let tempEventsState = {...appState.events}
  let eventIndex = tempEventsState.eventList.findIndex((e) => {
    return e.id === selectedEvent[0].id
  })
  console.log('event Index :', eventIndex)
  // const event = tempEventsState.filter((e) => {
  //   return e.id === selectedEvent[0].id
  // })
  if(eventIndex >= 0 && tempEventsState.eventList[eventIndex].availability) {
    tempMemberState.memberList[rowIndex].events = eventList
  }
  return {type: UPDATE_MEMBERS, tempMemberState}

}

import MOCK_MEMBERS from '../../data/MEMBERS_MOCK.json';
import {ASC_MEMBERS} from '../../constants';

const initialState = {
    memberList: MOCK_MEMBERS,
    headerList: [
        { fieldName: "Name", key: "name", sortingType : 'all' },
        { fieldName: "Phone", key: "phone" },
        { fieldName: "Age", key: "age", sortingType : 'all' },
        { fieldName: "E-mail", key: "email" },
        { fieldName: "Company ", key: "company" },
      ]
}

const memberReducer = (state=initialState, action) =>{
    console.log('Members Reducer :', state, action)
    switch(action.type) {
        case 'ADD_MEMBER':
            return {...state}
        case 'ASC_MEMBERS':
            return {...state, members:action.tempMemberState}
        default:
            return {...state}
    }
}
export default memberReducer;
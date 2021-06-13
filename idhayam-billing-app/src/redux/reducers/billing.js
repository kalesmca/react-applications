import {ADD_BILL_ITEM, REMOVE_BILL_ITEM, UPDATE_BILL_CUSTOMER} from '../../constants/actions';
const initState = {
    itemList:[],
    date:null,
    consumerInfo:{},
    totalAmount:0
}

const billing = (state=initState, action) => {
    switch(action.type){
        case ADD_BILL_ITEM:
            console.log('action:', action)
            return {...state, ...action.payload}
        case REMOVE_BILL_ITEM: 
            return {...state, itemList:action.payload}
        case UPDATE_BILL_CUSTOMER:
            return {...state, consumerInfo:action.payload}
        default:
            return{...state}
    }
}

export default billing;
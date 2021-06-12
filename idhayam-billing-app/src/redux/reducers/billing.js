import {ADD_BILL_ITEM, REMOVE_BILL_ITEM} from '../../constants/actions';
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
        default:
            return{...state}
    }
}

export default billing;
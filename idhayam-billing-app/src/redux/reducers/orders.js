import {SUBMIT_BILL} from '../../constants/actions';

const initState ={
    billList:[]
}

const orders = (state=initState, action) => {
    switch(action.type){
        case SUBMIT_BILL: 
        console.log('action:', action)
            return{...state, billList:[...state.billList,...[action.payload]]}
        default:
            return {...state}
    }
}

export default orders;
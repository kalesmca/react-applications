import MOCK_TRANSACTIONS from '../../data/transactions.json';
import {GET_ALL_TRANSACTIONS} from '../../shared/constants/actions';

const initState = {
    transactionList : MOCK_TRANSACTIONS,
    flag:false
}

const transactionReducer = (state=initState, action) =>{
    switch(action.type) {
        case "GET_ALL_TRANSACTIONS" :{
            return {...state}
        }
        default :{
            return { ...state}
        }
    }

}

export default transactionReducer;
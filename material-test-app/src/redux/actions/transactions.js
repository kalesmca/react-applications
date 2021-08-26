import {GET_ALL_TRANSACTIONS, GET_TRANSACTION_BY_TYPE} from '../../shared/constants/actions';

export const getAllTransaction = () => {
    
    return {type: GET_ALL_TRANSACTIONS}
}

export const getTransactionBytype = (type, list) =>{

    return {type: GET_TRANSACTION_BY_TYPE }

}
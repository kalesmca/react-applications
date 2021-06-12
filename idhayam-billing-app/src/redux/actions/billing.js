    import {ADD_BILL_ITEM} from '../../constants/actions';

    export const addBillItem = (billData) => {
        return {type: ADD_BILL_ITEM, payload: billData}
    }


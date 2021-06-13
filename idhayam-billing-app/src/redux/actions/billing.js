    import {ADD_BILL_ITEM, UPDATE_BILL_CUSTOMER, REMOVE_BILL_ITEM} from '../../constants/actions';

    export const addBillItem = (billingState, billData) => {
        let tempState = {...billingState}
        tempState.totalAmount =0
        tempState.itemList.map ((item) => {
            tempState.totalAmount = tempState.totalAmount + item.amt 
        })
        tempState.totalAmount+=billData.amt;
        
        return {type: ADD_BILL_ITEM, payload: {...tempState, itemList:[...tempState.itemList, ...[billData]]}}
    }

    export const removeBillItem = (billItemList, index) => {
        
        const newItemList = billItemList.filter((item)=>{return item.id !== billItemList[index].id})
        return { type: REMOVE_BILL_ITEM, payload: newItemList}
    }

    export const updateBillCustomer = (customerInfo) => {
        return {type:UPDATE_BILL_CUSTOMER, payload:customerInfo}
    }

    // export const updateBillItem = ()


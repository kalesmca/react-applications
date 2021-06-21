    import {ADD_BILL_ITEM, UPDATE_BILL_CUSTOMER, REMOVE_BILL_ITEM, RESET_CURRENT_BILL,
        SET_BILL, SET_APPLICATION_STATE} from '../../constants/actions';

    export const setApplicationState = () => {
        let response; 
        return async dispatch =>{
            await fetch("http://localhost:3000/products",{method:"GET",headers: {
                'Content-Type': 'application/json',
                }}).then((productRes)=>{
                console.log('response :', productRes)
                response = productRes
                debugger
                dispatch({type:SET_APPLICATION_STATE, payload:response })
            })
            
        }
    }

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

    export const resetCurrentBill = () => {
        return {type:RESET_CURRENT_BILL}
    }

    export const setBill = (id, billList) => {
        const currentBill = billList.filter(bill => {return bill.billId === id})
        return {type: SET_BILL, payload: currentBill}
    }

    



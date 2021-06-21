import {SUBMIT_BILL} from '../../constants/actions';

export const submitBill = (data) => {
    let obj ={}
    data.itemList.map((item)=>{
      obj[item.selectedProductObj.id] = item.qty
    })
    data.summary = obj;
    data.billId= Math.round(new Date().getTime() / 1000)
return{type:SUBMIT_BILL, payload:data}
}
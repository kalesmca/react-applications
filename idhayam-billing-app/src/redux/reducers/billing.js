import {
  ADD_BILL_ITEM,
  REMOVE_BILL_ITEM,
  UPDATE_BILL_CUSTOMER,
  RESET_CURRENT_BILL,
  SET_BILL,
  SET_APPLICATION_STATE
} from "../../constants/actions";
const initState = {
  itemList: [],
  date: null,
  consumerInfo: {},
  totalAmount: 0,
};

const billing = (state = initState, action) => {
  switch (action.type) {
    case ADD_BILL_ITEM:
      console.log("action:", action);
      return { ...state, ...action.payload };
    case REMOVE_BILL_ITEM:
      return { ...state, itemList: action.payload };
    case UPDATE_BILL_CUSTOMER:
      return { ...state, consumerInfo: action.payload };
    case RESET_CURRENT_BILL:
      return { ...initState };
    case SET_BILL:
        return{...action.payload}
    case SET_APPLICATION_STATE:
        return {...state}
    default:
      debugger
      return { ...state, customerInfo:action.payload };
  }
};

export default billing;

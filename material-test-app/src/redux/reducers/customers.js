import MOCK_CUSTOMER from '../../data/customer.json';
import {GET_CUSTOMERS} from '../../shared/constants/actions';

const initState = {
    customerList : MOCK_CUSTOMER,
    flag:false
}

const customerReducer = (state=initState, action) =>{
    switch(action.type) {
        case GET_CUSTOMERS :{
            return {...state}
        }
        default :{
            return { ...state}
        }
    }

}

export default customerReducer;
import CUSTOMERS from '../../data/customers.json';

const initState = {
    customerList: CUSTOMERS
}

const customers = (state=initState, action) => {
    switch(action.type){
        default:
            return {...state}
    }
}

export default customers;
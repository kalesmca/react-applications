import MOCK_PRODUCTS from '../../data/products.json';

const initState = {
    productList : MOCK_PRODUCTS,
    flag:false
}

const productReducer = (state=initState, action) =>{
    switch(action.type) {
        case "ADD" :{
            return {...state}
        }
        default :{
            return { ...state}
        }
    }

}

export default productReducer;
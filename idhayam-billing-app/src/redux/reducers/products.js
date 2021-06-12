import PRODUCTS from '../../data/product.json';

const initState = {
    productList: PRODUCTS,
    date: new Date()
}

const productReducer = (state = initState, action) => {
    switch(action.type){
        default: 
        return {...state}
    }
}

export default productReducer;
import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {getProducts, getCustomers} from '../MOCK/apis';

const ProductList = (props) => {
    // const productList = useSelector((state)=> state)
   
    
    
      React.useEffect(() => {
          getProducts().then((res)=>{
              console.log('res:', res)
          })
      },[])

    return(
        <div>
            product list showing
        </div>
    )
}

export default ProductList;
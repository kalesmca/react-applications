import MOCK_CUSTOMERS from '../data/customer.json';
import MOCK_PRODUCTS from '../data/products.json';

export const getCustomers = () =>{
    new Promise((resolve, reject) =>{
        if(!MOCK_CUSTOMERS){
            return setTimeout(()=>{
                reject(new Error('Customers not found'))
            },500)
        }
        else{
            return setTimeout(()=>{
                resolve(Object.values(MOCK_CUSTOMERS))
            }, 500)
        }
    })
}
const users = {
    nameList : [{name:"kaleess"}, {name:"arjun"}]
}
export const getProducts = async () =>{
    console.log('comming:', MOCK_PRODUCTS)
    return users;
    // new Promise((resolve, reject) =>{
    //     if(!MOCK_PRODUCTS){
    //         return setTimeout(()=>{
    //             reject(new Error('Product not found'))
    //         },250)
    //     }
       
    //         setTimeout(()=>
    //             resolve(Object.values(users))
    //         , 250)
        
    // })
}
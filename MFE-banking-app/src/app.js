import React, { useRef, useEffect, useState } from 'react';
import { registrationMount } from 'registration/RegistrationApp';
// import {customersMount} from 'customers/CustomersApp';
import { customerListMount } from 'customerList/CustomerListApp';
import HeaderComponent from './layout/header';
import {SAVE_CUSTOMER,GET_CUSTOMERS} from '../constants/url';
import axios from 'axios';
import './index.css';
const App = (props) => {
    const [customerList, setCustomerList] = useState([])

    const registraiontRef = useRef(null);
    // const customersRef = useRef(null);
    const customerListRef = useRef(null);
    const save = (data) => {
        console.log('myData', data)
    }

    const mine=(data)=>{
        console.log('callback:', data)
        axios.post(SAVE_CUSTOMER, data).then((res)=>{
            console.log("Response:", res); 
            getCustomers();   
        })
    }

    const getCustomers = () =>{
        axios.get(GET_CUSTOMERS).then((customerRes)=>{
            console.log('customer Res:', customerRes);
            if(customerRes?.data){
                setCustomerList(customerRes.data)

            }
        })
    }
    useEffect(()=>{
        getCustomers();
    },[])
    useEffect(() => {
        console.log('container calling')
        // customersMount(customersRef.current,{theme: "default", selectedCif: props })
        registrationMount(registraiontRef.current, { theme: "kalees", mine: mine })
        customerListMount(customerListRef.current, { theme: "default", customerList: customerList })
    });
    return (
        <div>
            <HeaderComponent />
            <div>
                <div ref={registraiontRef} style={{margin:"2rem"}}>

                </div>
                <div ref={customerListRef}  style={{margin:"2rem"}}>

                </div>
            </div>

        </div>
    )
}

export default App;
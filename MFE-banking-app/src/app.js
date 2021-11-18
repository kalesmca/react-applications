import React, { useRef, useEffect } from 'react';
import { registrationMount } from 'registration/RegistrationApp';
// import {customersMount} from 'customers/CustomersApp';
import { customerListMount } from 'customerList/CustomerListApp';
import HeaderComponent from './layout/header';
import './index.css';
const App = (props) => {

    const registraiontRef = useRef(null);
    // const customersRef = useRef(null);
    const customerListRef = useRef(null);
    const save = (data) => {
        console.log('myData', data)
    }
    useEffect(() => {
        console.log('container calling')
        // customersMount(customersRef.current,{theme: "default", selectedCif: props })
        registrationMount(registraiontRef.current, { theme: "default", selectedCif: props })
        customerListMount(customerListRef.current, { theme: "default", selectedCif: props })
    });
    return (
        <div>
            <HeaderComponent />
            <div>
                <div ref={registraiontRef}>

                </div>
                <div ref={customerListRef}>

                </div>
            </div>

        </div>
    )
}

export default App;
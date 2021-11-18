import React,{useRef, useEffect} from 'react'; 
import {registrationMount} from 'registration/RegistrationApp';
import {customersMount} from 'customers/CustomersApp';
import {customerListMount} from 'customerList/CustomerListApp';

const App = (props) =>{

    const registraiontRef = useRef(null);
    const customersRef = useRef(null);
    const customerListRef = useRef(null);

    useEffect(()=>{
        customersMount(customersRef.current,{theme: "default", selectedCif: props})
        registrationMount(registraiontRef.current,{theme: "default", selectedCif: props})
        customerListMount(customerListRef.current,{theme:"default", selectedCif:props})
    });
    return(
        <div>Main container loaded
            <div ref={customersRef}>

            </div>
            <div ref={registraiontRef}>

            </div>
            <div ref={customerListRef}>

            </div>
        </div>
    )
}

export default App;
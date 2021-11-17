import React,{useRef, useEffect} from 'react';
// import {registrationMount} from 'registraion/RegistrationApp';
import {customersMount} from 'customers/CustomersApp'

const App = (props) =>{

    const registraiontRef = useRef(null);
    const customersRef = useRef(null);

    useEffect(()=>{
        customersMount(customersRef.current,{theme: "default", selectedCif: props})
    });
    return(
        <div>Main container loaded
            <div ref={customersRef}>

            </div>
        </div>
    )
}

export default App;
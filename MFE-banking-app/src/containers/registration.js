import React,{useEffect, useRef} from "react";

import { registrationMount } from 'registration/RegistrationApp';
import { customersMount } from 'customers/CustomersApp';

const RegistrationComponent = (props) => {

    const registraiontRef = useRef(null);
    const customersRef = useRef(null);

    useEffect(() => {
        customersMount(customersRef.current, { theme: "default", selectedCif: props })
        registrationMount(registraiontRef.current, { theme: "default", selectedCif: props })
    });

    return (<div>
        Registration component

        <div ref={customersRef}>

            </div>
            <div ref={registraiontRef}>

            </div>
    </div>)
}

export default RegistrationComponent;
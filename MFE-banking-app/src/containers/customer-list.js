import React,{useEffect, useRef} from "react";
// import { customerListMount } from 'customerList/CustomerListApp';


const CustomerListComponent = (props)=>{
    const customerListRef = useRef(null);

    // useEffect(() => {
        
    //     customerListMount(customerListRef.current, { theme: "default", selectedCif: props })
    // });
    return(
        <div>CustomerList Component
            {/* <div ref={customerListRef}>

</div> */}
        </div>
    )
}

export default CustomerListComponent;
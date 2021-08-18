import React from 'react';
import AccordionComponent from '../../../shared/components/accordion';
import {DefaultTable} from '../../../shared/components/table';

const CustomerTransactionComponent =(props) => {
    const transactionTypes = [
        {
            id:1, label: "Equities", isDisabled:false, isOpen : true
        },{
            id:2, label: "Bonds", isDisabled:false, isOpen : false
        },{
            id:3, label: "Mutual funds", isDisabled:false, isOpen : false
        },{
            id:4, label: "Structured Notes", isDisabled:false, isOpen : false
        },{
            id:5, label: "Structured Deposits", isDisabled:false, isOpen : false
        }
    ]
    return(
        <div>
        <DefaultTable/>
            <AccordionComponent
                accordionList = {transactionTypes}
            />
        </div>
    )
}

export default CustomerTransactionComponent;
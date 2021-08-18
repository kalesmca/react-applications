import React, {useEffect} from 'react';
import {DataTableComponent} from '../../../shared/components/table';
import { useSelector, useDispatch } from "react-redux";
import getColumn from '../utils/table-utils.ts';

const CustomerListComponent =(props) => {
    const columns = getColumn()
    const applicationState = useSelector((state) => state);
    const customerList = applicationState.customers.customerList;
    useEffect(()=>{
        console.log('columnsss:', columns, applicationState)
    })
    const dispatch = useDispatch();
  console.log('application state:', applicationState);
    return(
        <div>
                <DataTableComponent 
                    cols = {columns}
                    rows = {customerList}
                />
            
        </div>
    )
}

export default CustomerListComponent;
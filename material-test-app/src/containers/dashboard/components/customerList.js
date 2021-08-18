import React, {useEffect} from 'react';
import DataTableComponent from '../../../shared/components/table';
import { useSelector, useDispatch } from "react-redux";
import getColumn from '../utils/table-utils.ts';

const CustomerListComponent =(props) => {
    const columns = getColumn()
    useEffect(()=>{
        console.log('columnsss:', columns)
    })
    const dispatch = useDispatch();
  const applicationState = useSelector((state) => state);
  console.log('application state:', applicationState);
    return(
        <div>
                <DataTableComponent />
            
        </div>
    )
}

export default CustomerListComponent;
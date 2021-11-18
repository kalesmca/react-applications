import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {GET_CUSTOMERS} from '../constants/url';
import "./index.css";

const App = (props) =>{
    
    return(
        <div>Customer List 
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>E-mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.customerList?.length ? props.customerList.map((customer, customerIndex) =>{
                                return (
                                    <tr key={customerIndex}>
                                        <td>
                                            {customerIndex +1}
                                        </td>
                                        <td>
                                            {customer.name}
                                        </td>
                                        <td>
                                            {customer.city}
                                        </td>
                                        <td>
                                            {customer.email}
                                        </td>
                                    </tr>
                                )
                            }) : (<tr>
                                <td colSpan={4}> No Data Found</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App;
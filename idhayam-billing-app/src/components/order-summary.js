import React from 'react';
import '../styles/customers.css';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from "react-router-dom";

const OrderSummaryComponent = (props) => {
    const appState = useSelector(state=>state);
    const billList = appState.orders.billList;
    const history = useHistory()
    return(

        <table id="customers">
        <thead>
      <tr>
        <th>Sno</th>
        <th>Customer Name</th>
        <th>1L-இ</th>
        <th>2L-இ</th>
        <th>5L-இ</th>
        <th>500 ml-இ</th>
        <th>100 ml-இ</th>
        <th>50 ml-இ</th>
        <th>Action</th>
        
      </tr>
      </thead>
      <tbody>
      {billList.map((order, customerIndex) => {
        return(<tr key={customerIndex} 
         onClick={()=>{history.push(`/bill/${order.billId}`)}}>
          <td>{customerIndex + 1}</td>
          <td>{order.consumerInfo.label}</td>
          <td>{order.summary.I1}</td>
          <td>{order.summary.I2}</td>
          <td>{order.summary.I3}</td>
          <td>{order.summary.I4}</td>
          <td>{order.summary.I5}</td>
          <td>{order.summary.I6}</td>
          <td>
            <button>Edit</button>
            <button>-</button>
          </td>
        </tr>)

      })}
      </tbody>
    </table>

    )

}

export default OrderSummaryComponent;
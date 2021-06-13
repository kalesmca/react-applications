import React, { useEffect } from "react";
import "../styles/customers.css";
import { useSelector } from "react-redux";
const CustomerComponent = () => {
  const appState = useSelector((state) => state);
  const customerList = appState.customers.customerList;
  useEffect(() => {
    console.log("appState:", appState);
  });
  return (
    <table id="customers">
      <tr>
        <th>Sno</th>
        <th>Name</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>Gst Number</th>
      </tr>
      {customerList.map((customer, customerIndex) => {
        return(<tr key={customerIndex}>
          <td>{customerIndex + 1}</td>
          <td>{customer.label}</td>
          <td>{customer.address}</td>
          <td>{customer.mobile}</td>
          <td>{customer.gst}</td>
        </tr>)
      })}
    </table>
  );
};

export default CustomerComponent;

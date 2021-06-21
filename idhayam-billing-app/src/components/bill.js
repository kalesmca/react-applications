import React,{useEffect} from 'react';
import "../styles/bill.css";
import {useSelector} from 'react-redux';



const BillComponent = props => {
    const applicationState = useSelector(state=>state)
    const dataList = applicationState.billing.itemList;
    const totalAmt = applicationState.billing.totalAmount;
    
    const customerInfo =applicationState.billing.consumerInfo;
    useEffect(()=>{
        console.log('bill appState:', applicationState)
    })
    return(
        <div >
            <div className="bill-header"> 
                <div>
                     <div> Sarvanakumar Trader </div>
                        <div>Muhavoor</div>
                        <div>Mobile: 9790313080</div>
                    
                </div>
                {customerInfo? <div>
                
                    <div>
                    {customerInfo.label} 
                    </div>
                    <div>
                        {customerInfo.address} 
                    </div>
                    <div>Mobile: {customerInfo.mobile}</div>

                
                    
                </div>: ""}
                {/* <div>Date : 20/05/2021</div> */}
             </div>
            <div >
                <table>
                    <thead>
                        <tr>
                            <th>
                                Price
                            </th>
                            <th style={{marginBlockEnd :"25px", paddingRight: "160px" }}>
                                Product Name
                            </th>
                            <th>
                                Quantity
                            </th>
                            <th>
                                Amount
                            </th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {dataList.map((data, dataIndex) => {
                            return(
                                <tr key={dataIndex}>
                                    <td>
                                        {data.price}
                                    </td>
                                    <td>
                                        {data.selectedProductObj.label}
                                    </td>
                                    <td>
                                        {data.qty}
                                    </td>
                                    <td>
                                        {data.amt}
                                    </td>
                                </tr>
                            )
                        })}
                        <tr >
                            <td colSpan="3" className="tot">Total Amount: </td>
                            <td  className="tot"> {totalAmt}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BillComponent;
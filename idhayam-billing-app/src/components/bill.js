import React from 'react';
import "../styles/bill.css";
import {useSelector} from 'react-redux';



const BillComponent = props => {
    const applicationState = useSelector(state=>state)
    const dataList = applicationState.billing.itemList;
    const totalAmt = applicationState.billing.totalAmount;

    return(
        <div >
            <div className="bill-header"> 
                <div>
                     <div> Sarvanakumar Trader </div>
                        <div>Muhavoor</div>
                    
                </div>
                <div>
                
                    <div>
                        ஆறுமுகசாமி பலசரக்கு கடை 
                    </div>
                    <div>
                        தளவாய்புரம் 
                    </div>
                
                    
                </div>
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
                                Total Amount
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
                            <td colSpan="4" className="tot"> {totalAmt}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BillComponent;
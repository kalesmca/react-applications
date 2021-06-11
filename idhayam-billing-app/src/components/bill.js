import React from 'react';
import "../styles/bill.css";

const dataList = [
    {
        pName:"Idhayam 5L",
        id: "I3",
        price: 700,
        labelName:"இதயம் 5லிட்டர்",
        qty: 5,
        totalAmt : 3500
    },
    {
        pName:"Idhayam 2L",
        id: "I2",
        price: 700,
        labelName:"இதயம் 2லிட்டர்",
        qty: 5,
        totalAmt : 3500
    },
    {
        pName:"Idhayam 5L",
        id: "I4",
        price: 700,
        labelName:"இதயம் 1லிட்டர்",
        qty: 5,
        totalAmt : 3500
    },
    
    
];

const BillComponent = props => {
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
                                        {data.labelName}
                                    </td>
                                    <td>
                                        {data.qty}
                                    </td>
                                    <td>
                                        {data.totalAmt}
                                    </td>
                                </tr>
                            )
                        })}
                        <tr >
                            <td colSpan="4" className="tot"> 5000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BillComponent;
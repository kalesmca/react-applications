import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../styles/bill-calculator.css";
import { useSelector, useDispatch } from "react-redux";
import {addBillItem} from './../redux/actions/billing';


const BillCalculatorComponent = () => {
  const dispatch = useDispatch();
  const applicationState = useSelector((state) => state);

  console.log('applciation state :', applicationState);
  const productList = applicationState.products.productList

  const initialState = {
    qty: 0,
    price: null,
    amt: null,
    selectedProductObj: null,
    id: null,
  };
  const itemList = applicationState.billing.itemList
  // const [itemList, setItems] = useState([]);
  const [itemObj, setItemObj] = useState(initialState);

  useEffect(() => {
    console.log("item obj :", itemObj);
    console.log("items :", itemList);
  });
  const handleChange = (data) => {
    console.log("data :", data);
    setItemObj({
      ...itemObj,
      ...{
        price: data.price,
        selectedProductObj: data,
        id: Math.round(new Date().getTime() / 1000),
      },
    });
  };

  const addItem = () => {
    // setItems([...itemList, itemObj]);
    dispatch(addBillItem(itemObj))

    setItemObj({ ...itemObj, ...initialState });
  };

  const editItem = (index) => {
    // setItemObj({
    //   qty: itemList[index].qty,
    //   amt: itemList[index].amt,
    //   price: itemList[index].price,
    //   selectedProductObj: itemList[index].selectedProductObj,
    //   id: itemList[index].id,
    // });
    // removeItem(index)
  };

  const removeItem = (index) => {
    
    // setItems(
    //   itemList.filter((item) => {
    //     return item.id != itemList[index].id;
    //   })
    // );
  };

  return (
    <div>
      {" "}
      Bill calculation
      <div>
        <table style={{ width: "80rem" }}>
          <thead>
            <tr>
              <th>Sno</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {itemList.map((item, itemIndex) => {
              return (
                <tr key={itemIndex}>
                  <td>{itemIndex + 1}</td>
                  <td>{item.selectedProductObj.label}</td>
                  <td>{item.qty}</td>
                  <td>{item.price}</td>
                  <td>{item.amt}</td>
                  <td>
                    <button
                      onClick={() => {
                        editItem(itemIndex);
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => {
                        removeItem(itemIndex);
                      }} >-</button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td>{itemList.length + 1}</td>
              <td>
                {/* <input value={itemObj.pName} onChange={(e) => {setItemObj({...itemObj, ...{pName: e.target.value}} )}} /> */}
                <Select
                  value={itemObj.selectedProductObj}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  options={productList}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={itemObj.qty}
                  onChange={(e) => {
                    setItemObj({
                      ...itemObj,
                      ...{
                        qty: e.target.value,
                        amt: e.target.value * itemObj.price,
                      },
                    });
                  }}
                />
              </td>
              <td>{itemObj.price}</td>
              <td>{itemObj.amt}</td>
              <td>
                <button
                  onClick={() => {
                    addItem();
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillCalculatorComponent;

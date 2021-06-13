import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../styles/bill-calculator.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addBillItem,
  removeBillItem,
  updateBillCustomer,
} from "./../redux/actions/billing";

const BillCalculatorComponent = () => {
  const dispatch = useDispatch();
  const applicationState = useSelector((state) => state);

  console.log("applciation state :", applicationState);
  const productList = applicationState.products.productList;
  const customerList = applicationState.customers.customerList;
  const consumerInfo = applicationState.billing.consumerInfo;

  const initialState = {
    qty: 0,
    price: null,
    amt: null,
    selectedProductObj: null,
    id: null,
  };
  const itemList = applicationState.billing.itemList;
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

  const selectCustomer = (data) => {
    dispatch(updateBillCustomer(data));
  };

  const addItem = () => {
    // setItems([...itemList, itemObj]);

    dispatch(addBillItem(applicationState.billing, itemObj));
    setItemObj({ ...itemObj, ...initialState });
  };

  const editItem = (index) => {
    setItemObj({
      qty: itemList[index].qty,
      amt: itemList[index].amt,
      price: itemList[index].price,
      selectedProductObj: itemList[index].selectedProductObj,
      id: itemList[index].id,
    });
    dispatch(removeBillItem(itemList, index));
  };

  const removeItem = (index) => {
    dispatch(removeBillItem(itemList, index));
  };

  return (
    <div>
      {" "}
      Bill calculation
      <div>
        <div style={{width:"20rem"}}>
          <Select
            value={consumerInfo}
            onChange={(e) => {
              selectCustomer(e)
            }}
            options={customerList}
          />
        </div>
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
                    <button
                      onClick={() => {
                        removeItem(itemIndex);
                      }}
                    >
                      -
                    </button>
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

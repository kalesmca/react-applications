import React, { useState, useReducer, useEffect, memo } from "react";
import { Form, Button, Col, Dropdown } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector, useDispatch } from "react-redux";
import { addMaterial } from "../Redux/actions/materials";
import './global.css';
import {get, postData} from '../services/api.service';

const Materials = (props) => {
  const applicationState = useSelector((state) => state);
  const dispatchAction = useDispatch();
  // const [obj, setObj] = useState({materialName:'',})
  
  const initalState = {
    name: applicationState.materials.materialList[props.index].name,
    price: applicationState.materials.materialList[props.index].price,
    qty: applicationState.materials.materialList[props.index].qty,
    amt: applicationState.materials.materialList[props.index].amt,
    vadagai: applicationState.materials.materialList[props.index].vadagai,
    date: props.date,
  };

  useEffect(() => {
    console.log("material: ", material);
  //   get("http://localhost:3000/materialList").then((res)=>{
  //   console.log('respones:', res)
  // })
  //   let obj = {
  //     url: "http://localhost:3000/materialList",
  //     data: {name:'kumar', age:24, id:899}
  //   }
  //   postData(obj).then((res)=> {
  //     console.log('post res:', res)
  // })

  });

  const updateMaterial = (state, action) => {
    console.log(action);
    switch (action.id) {
      case "price":
        return { ...state, price: parseInt(action.value) };
      case "name":
        return { ...state, name: action.value };
      case "price":
        return { ...state, price: parseInt(action.value) };
      case "vadagai":
        return {
          ...state,
          vadagai: parseInt(action.value),
          amt: state.amt + parseInt(action.value),
        };
      case "qty":
        return {
          ...state,
          qty: parseInt(action.value),
          amt: state.price * parseInt(action.value),
        };
      default:
        return { ...state };
    }
  };

  const [material, dispatch] = useReducer(updateMaterial, initalState);

  const handleChange = (e) => {
    console.log("e:", e.target.value);
  };

  const onChange = (values) => {
    console.log("values:", values);
  };

  console.log("application state:", applicationState);
  return (
    <div>
      date: {material.date}
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {material.name}==
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {applicationState.materials.materialTypes.map(
            (option, optionsIndex) => {
              return (
                <Dropdown.Item
                  key={optionsIndex}
                  onClick={() => {
                    dispatch({ id: "name", value: option.type });
                  }}
                >
                  {option.type}
                </Dropdown.Item>
              );
            }
          )}
        </Dropdown.Menu>
      </Dropdown>

      <input
        type="text"
        placeholder={"price"}
        value={material.price}
        onChange={(e) => {
          dispatch({ id: "price", value: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Number of Quatity"
        value={material.qty}
        onChange={(e) => {
          dispatch({ id: "qty", value: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Transport/ Vadagai"
        value={material.vadagai}
        onChange={(e) => {
          dispatch({ id: "vadagai", value: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Amount"
        value={material.amt}
        disabled={true}
      />

     

      <button
        onClick={() => {
          dispatchAction(
            addMaterial(material, applicationState.materials.materialList)
          );
        }}
      >
        {" "}
        +
      </button>
    </div>
  );
};
export default memo(Materials);

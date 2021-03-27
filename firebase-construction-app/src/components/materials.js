import React, { useState, useReducer, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { useSelector, useDispatch } from "react-redux";
import {addMaterial} from '../Redux/actions/materials';

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
  };

  useEffect(()=>{
      console.log('material: ', material)
  })

  const updateMaterial = (state, action) => {
    console.log(action);
    switch (action.id) {
      case "price":
        return { ...state, price: parseInt(action.value) };
        case "name":
            return { ...state, name: action.value };
        case "price":
            return { ...state, price: parseInt(action.value) };
        case "qty":
            return { ...state, qty: parseInt(action.value), amt: state.price * parseInt(action.value) };
      default:
        return { ...state };
    }
  };

  const [material, dispatch] = useReducer(updateMaterial, initalState);

  const handleChange = (e) => {
    console.log("e:", e.target.value);
  };

  console.log("application state:", applicationState);
  return (
    <div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState" size="sm">
            <Form.Label>Material Name</Form.Label>
            <Form.Control
              as="select"
              defaultValue="Choose..."
              onChange={(e) => {
                dispatch({id:'name', value: e.target.value})
              }}
            >
              {applicationState.materials.materialTypes.map(
                (material, matIndex) => {
                  return <option key={matIndex}>{material.type}</option>;
                }
              )}
              <option>Choose...</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="price" as={Col} size="sm">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Price"
              value={material.price}
              onChange={(e) => {
                dispatch({ id: "price", value: e.target.value });
              }}
            />
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="qty" as={Col} size="sm">
            <Form.Label>Quatity</Form.Label>
            <Form.Control type="number" placeholder="Number of Quatity" value={material.qty} onChange={(e)=> {dispatch({id:'qty', value: e.target.value})}}/>
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="Vadagai" as={Col} size="sm">
            <Form.Label>Vadagai</Form.Label>
            <Form.Control type="number" placeholder="Transport or Vadagai" value={material.vadagai} onChange={(e)=> {dispatch({id:'vadagai', value: e.target.value})}} />
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>
        
        <Form.Group controlId="Amt" as={Col} size="sm">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="number" placeholder="Amount"  value={material.amt} disabled={true}/>
            <Form.Text className="text-muted">
              {/* We'll never share your email with anyone else. */}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={()=>{dispatchAction(addMaterial(material,applicationState.materials.materialList))}}>
          +
        </Button>
         
          
          </Form.Row>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Materials;
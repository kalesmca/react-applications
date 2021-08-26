import React, { useState, useContext } from "react";
import FButton from "./FButton";
import {CounterContext} from "../context/counterContext";

export default function Counter() {
  const [value, setValue] = useState(0);

  const {counterValue, increment, decrement } = useContext(CounterContext)

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  return (
    <div>
      <h4>Counter - {counterValue}</h4>
      <hr />

      <div>
        <FButton
          bgColor="green"
          textName="+"
          receiveBtnClick={increment}
        />{" "}
        &nbsp;
        <FButton
          bgColor="orangered"
          textName="-"
          receiveBtnClick={decrement}
        />{" "}
        &nbsp;
      </div>

      <div>
        <h5>Value: {counterValue} </h5>
      </div>
    </div>
  );
}

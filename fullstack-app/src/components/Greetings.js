import React, { useState } from "react";

// useState - is a hook to update the state variable

export default function Greeting() {
  const [inputValue, setInputValue] = useState("Type Something");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h4> Greeting</h4>
      <hr />
      <input type="text" onChange={handleInputChange} />

      {/* Conditional Rendering */}

      {inputValue.length > 0 ? (
        <div>
          <h5>{inputValue}</h5>
        </div>
      ) : (
        <div>
          <h5>Type Something in the box</h5>
        </div>
      )}
    </div>
  );
}

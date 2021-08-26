import React from "react";

export default function FButton(props) {
  const handleBtnClick = () => {
    console.log("button clicked", props);
    // sending control back to parent
    props.receiveBtnClick();
  };

  return (
    <button
      style={{
        color: props.textColor,
        backgroundColor: props.bgColor
      }}
      onClick={handleBtnClick}
      className="btn"
    >
      {props.textName}
    </button>
  );
}

FButton.defaultProps = {
  textName: "Default",
  textColor: "white",
  bgColor: "black",
  receiveBtnClick: () => console.log("default clicked")
};

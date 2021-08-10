import React from "react";
import "../styles/header.css";
import Standard_Chartered from "../assets/images/Standard_Chartered.svg.png";

const HeaderContainer = (props) => {
  return (
    <div className="site-header">
        <div className="header-item header-item1">
          <img className="img-cont" src={Standard_Chartered} alt={"logo"} />
        </div>
        <div className="header-item2"></div>
        <div className="header-item header-item3">
            <div className="icon-cont">css</div>
            <div className="icon-cont">html</div>
            <div className="icon-cont">search</div>
            <div className="icon-cont">search</div>
            <div className="icon-cont">search</div>
        </div>
      
    </div>
  );
};

export default HeaderContainer;

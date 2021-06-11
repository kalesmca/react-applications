import React from 'react';
import '../styles/header.css';

const HeaderComponent = props => {
    return (
        <div className="header-container">
           <div className="header-items">Home</div>
           <div className="header-items">Summary-Table</div>
           <div className="header-items">Product-Price</div>
           <div className="header-items">Stocks</div>
        </div>
    )
}

export default HeaderComponent;
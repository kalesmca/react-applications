import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

const HeaderComponent = props => {
    return (
        <div className="header-container">
        <Link to="/" className="header-items">Home</Link>
        <Link to="/table" className="header-items">Summary-Table</Link>

        <Link to="/" className="header-items">Product-Price</Link>

        <Link to="/" className="header-items">Stocks</Link>

           
        </div>
    )
}

export default HeaderComponent;
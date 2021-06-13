import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

const HeaderComponent = props => {
    return (
        <div className="header-container">
        <Link to="/" className="header-items">Home</Link>
        <Link to="/order-summary" className="header-items">Summary-Table</Link>

        <Link to="/products" className="header-items">Product-Price</Link>

        <Link to="/customers" className="header-items">Customers</Link>

           
        </div>
    )
}

export default HeaderComponent;
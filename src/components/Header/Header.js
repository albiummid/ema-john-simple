import React from 'react';
import logo from "../../images/logo.png";
// import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    return (
        <div className="header">
            <a href="/shop"> <img src={logo} alt=""/></a>
            {/* <Link to ={"/product/"}> <h1>Product</h1></Link> */}
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
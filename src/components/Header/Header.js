import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "../../images/logo.png";
// import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
   console.log(loggedInUser);
    return (
        <div className="header">
            <a href="/shop"> <img src={logo} alt=""/></a>
            {/* <Link to ={"/product/"}> <h1>Product</h1></Link> */}
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <button onClick={()=> setLoggedInUser({})}>SignOut</button>
            </nav>
        </div>
    );
};

export default Header;
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from "../../images/logo.png";
// import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
    const history = useHistory();
    const handleLogin = () => {
        history.replace('/login')
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="header">
            <a href="/shop"> <img src={logo} alt=""/></a>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {
                    loggedInUser.email ? <button onClick={() => setLoggedInUser({})} >SignOut </button>   : <button onClick={handleLogin} >Log In</button>
                }
                {loggedInUser.email &&
                    <li style={{color:'red',listStyle:"none",display:"inline-block",marginLeft:"10px",backgroundColor:"orange",padding:'5px',color:"red"}}>{ loggedInUser.name}</li>
                 }
               
            </nav>
        </div>
    );
};

export default Header;
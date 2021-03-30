import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import{getDatabaseCart, removeFromDatabaseCart} from '../../utilities/databaseManager'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyimg from "../../images/giphy.gif"
import { useHistory } from 'react-router';

const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced] = useState(false);
    const history = useHistory()
    
    const handleProceedCheckout = () => {
        history.push('/shipment');
    }
    

    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);

    }

    useEffect(() => {
        // cart
        const savedCart = getDatabaseCart(cart);
        const productKeys = Object.keys(savedCart);
        fetch('https://ema-john-server-albi.herokuapp.com/productsByKeys', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                
            },
            body: JSON.stringify(productKeys)
        })
            .then(res => res.json())
        .then(data => setCart(data))
    }, []);
    
    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyimg} alt=""/> 
    }
    return (
        <div className="twin-container">
            <div className="product-container">

            {
                cart.map(pd =>  <ReviewItem  product={pd} key={pd.key} removeProduct ={removeProduct}></ReviewItem>)
                }
                { thankyou }

            </div>
            <div className="cart-container"></div>
            <Cart cart={cart}>
                <button onClick={handleProceedCheckout}>Proceed Checkout</button>
                </Cart>

        </div>
    );
};

export default Review;
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import{getDatabaseCart, processOrder, removeFromDatabaseCart} from '../../utilities/databaseManager'
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyimg from "../../images/giphy.gif"

const Review = () => {

    const [cart, setCart] = useState([]);
    const [orderPlaced,setOrderPlaced] = useState(false);

    const handlePlaceOrder = () => {
        setCart([]);
        processOrder(); 
        // for cleaning all cart items after clicking on place order button.
        setOrderPlaced(true);
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
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key]
            return product;
        });
        setCart(cartProducts);
    }, []);
    
    let thankyou;
    if (orderPlaced) {
        thankyou = <img src={happyimg}/> 
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
                <button onClick={handlePlaceOrder}>Place Order</button>
                </Cart>

        </div>
    );
};

export default Review;
import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from "../Product/Product";
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from "../../utilities/databaseManager";
import { Link } from 'react-router-dom';
const Shop = () => {
    // const first10 = fakeData.slice(0, 10)
    const [products,setProducts] = useState({})
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("https://ema-john-server-albi.herokuapp.com/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    },[products])

    useEffect(() => {
        const savedCart = getDatabaseCart();
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

    const handleAddProduct = (product) => {
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if (sameProduct) {
             count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey)
            newCart = [...others,sameProduct]
        }
        else {
            product.quantity = 1;
            newCart = [...cart,product];
        }
    setCart(newCart);
   

    addToDatabaseCart(product.key, count);

}
// console.log(products);
    return (
        <div className="twin-container">
            <div className="product-container">

                { products.length &&
                    products.map(pd => <Product handleAddProduct={handleAddProduct} product={pd} key={pd.key}
                    showAddToCart={true}
                    ></Product>)
                    // here we add a function "addHandleProduct"as a props because we will use it on product.js
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    <Link to="/review" > <button> Order Review </button> </Link>
                </Cart>
            </div>
                        
        </div>
    );
};

export default Shop;
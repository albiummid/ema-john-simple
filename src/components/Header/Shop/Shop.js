import React, { useState } from 'react';
import fakeData from "../../../fakeData";
import "./Shop.css";
import Product from "../Product/Product"
import Cart from './Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10)
    const [products, setProducts] = useState(first10)
    const [cart,setCart] =useState([])

const handleAddProduct = (product) =>{
    const newCart =[...cart ,product]
    setCart(newCart)
}

    return (
        <div className="shop-container">
            <div className="product-container">

                {
                    products.map(pd => <Product handleAddProduct = {handleAddProduct} product={pd}></Product>)
                    // here we add a function "addHandleProduct"as a props because we will use it on product.js
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart} ></Cart>
            </div>

        </div>
    );
};

export default Shop;
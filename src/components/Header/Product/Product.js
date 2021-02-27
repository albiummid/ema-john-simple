import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    // console.log(props.product);
    const { name, img, price, seller, shipping, star, starCount, stock, url, wholePrice, category, features } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h4 className=
                    "product-name">{props.product.name}</h4>
                <div>
                    <p><small> by :  {seller}  </small> </p>
                    <h5>$ {price}</h5>
                    <p> <small>only {stock} left in stock - order soon</small> </p>
                    <button onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                    {/* here we use a arrow funtion for  "props.handleAddProduct" function.because by calling a function with passing "props.product" property; it executes it's result.for that loading this page it will automatically run the function. now we add that function on a arrow function and it will be called when button will be clicked.without having parameter of a function,not need to set that on a arrow function */}
                </div>
                <div className="features">
                    <h4>Features</h4>
                </div>
            </div>
        </div>
    );
};

export default Product;
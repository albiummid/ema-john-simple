import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Product = ({product, handleAddProduct, showAddToCart}) => {
    // console.log(props.product.key);
    // const { product, handleAddProduct } = props;
    const { name, img, price, seller, stock ,key} = product;
    return (
        <div className="product">
            <div>
                <Link to={"/product/"+ key}><img src={img} alt="" /></Link>
                
            </div>
            <div className="details">
                <h4 className=
                    "product-name"><Link to={"/product/"+ key} >{name}</Link></h4>
                <div>
                    <p><small> by :  {seller}  </small> </p>
                    <h5>$ {price}</h5>
                    <p> <small>only {stock} left in stock - order soon</small> </p>
                    {showAddToCart && <button onClick={() => handleAddProduct(product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>}
                    {/* here we use condiotion. */}


                    {/* here we use a arrow funtion for  "props.handleAddProduct" function.because by calling a function with passing "props.product" property; it executes it's result.for that loading this page it will automatically run the function. now we add that function on a arrow function and it will be called when button will be clicked.without having parameter of a function,not need to set that on a arrow function */}
                </div>
            </div>
        </div>
    );
};

export default Product;
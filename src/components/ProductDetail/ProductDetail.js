import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const { productKey } = useParams();
    const [product, setProduct] = useState({})
    console.log(product);
    useEffect(() => {
        fetch(`https://ema-john-server-albi.herokuapp.com/product/${productKey}`)
            .then(res => res.json())
        .then(data => setProduct(data))
    },[productKey])
    return (
      
        <div>
    
            <h1> Your Product Details</h1>
            <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default ProductDetail;
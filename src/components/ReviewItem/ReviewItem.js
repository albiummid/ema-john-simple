import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity,key,price } = props.product;
    const reviewItemStyle = {
        borderBottom: "1px solid lightgray",
        marginBottom: "20px",
        paddingBottom: "5px",
        marginLeft:"200px"
    }
    return (
        <div style={reviewItemStyle}>
    <h4>Product Name: {name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>Price:$ {price}</small></p>
            <br />
            <button onClick={() =>props.removeProduct(key)} className="main-btn">
            remove
            </button>
        </div>
        
    );
};

export default ReviewItem;
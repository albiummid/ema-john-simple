import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const { name, quantity } = props.product;
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
            <br />
            <button className="main-btn">
            remove
            </button>
        </div>
        
    );
};

export default ReviewItem;
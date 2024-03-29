import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total,prd)=> total + prd.price,0)
    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //     const product = cart[i];
    //     total = Number(total + product.price * product.quantity);
    // }
    const total = cart.reduce((total, product) => total + product.price * product.quantity || 1, 0);

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }

    const tax = total / 10;
    const grandTotal = (total + shipping + Number(tax)).toFixed(2)

    const formatNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
                <h5 className="text-danger" >Order Summary:</h5>
                <p>Items Ordered: {cart.length}</p>
                <p>Product Price:{formatNumber(total)}</p>
                <p><small>Shipping Cost: {shipping} </small></p>
                <p><small>Tax + Vat = {formatNumber(tax)}</small></p>
            <p> Total Price :{grandTotal} </p>
            
            {
                props.children
            }
            {/* here i set a children of cart in shop.js ; thats why only in shop component button is displayed */}

        </div>
    );
};

export default Cart;
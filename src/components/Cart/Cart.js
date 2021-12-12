import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd)=> total+prd.price, 0);
    return (
        <div>
            <h2>Order Summary</h2>
            <h5>Items Ordered: {cart.length}</h5>
            
            <h5>Total Price: {total}</h5>
        </div>
    );
};

export default Cart;
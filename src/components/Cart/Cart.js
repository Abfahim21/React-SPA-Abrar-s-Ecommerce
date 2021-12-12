import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = (cart.reduce((total, prd)=> total+prd.price, 0)).toFixed(2);

    let shipping = 0;
    if(total > 39){
        shipping = 0;
    }
    else if(total > 19){
        shipping = 9.99;
    }
    else if(total > 9){
        shipping = 6.99;
    }
    else if(total <= 0){
        shipping = 0;
    }
    else if(total < 9){
        shipping=6.99;
    }

    let vat =((total*2)/100).toFixed(2);
    
    let grandTotal = (Number(total) + shipping + Number(vat)).toFixed(2);

    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <h5>Product Price: ${total}</h5>
            <h5>Shipping Cost: ${shipping}</h5>
            <h5><small>VAT: ${vat}</small></h5>
            <h5>Total Price: ${grandTotal}</h5>
            <button className='review-order-btn'>Review Order</button>
        </div>
    );
};

export default Cart;
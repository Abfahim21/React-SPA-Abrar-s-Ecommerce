import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name, img, seller, price, stock} = props.products;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>Seller: {seller}</small></p>
                <br />
                <p>Price: ${price}</p>
                <p>Only {stock} left in stock.</p>
                <button className='cart-add-btn' 
                onClick={()=> props.handleAddProducts(props.products)}><FontAwesomeIcon icon={faShoppingCart} />  Add to cart</button>

            </div>
            
        </div>
    );
};

export default Product;
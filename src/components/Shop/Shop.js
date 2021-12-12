import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [prod, setProd] = useState(first10);
    console.log(setProd);
    const [cart, setCart] = useState([]);

    const handleAddProducts = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                
                {
                    prod.map(pd => <Product products={pd} handleAddProducts={handleAddProducts}></Product>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
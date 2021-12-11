import React from 'react';
import logo from '../../images/tokopedia-38840.png';
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order-review">Order Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;
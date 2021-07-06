import React from 'react';
import { LoadCartItems } from './LoadCartItems';
import CartOverview from './CartOverview';
import CartHeader from './CartHeader';
import './Cart.css';

const Cart = () => {

    return (
        <div className="Cart">
            <ul className="cartHeader">
                <CartHeader />
            </ul>
            <ul>
                <LoadCartItems />
                <CartOverview />
            </ul>
        </div>
    )
};

export default Cart;

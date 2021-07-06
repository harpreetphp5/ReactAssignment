import React, { useContext } from 'react';
import { ProductsContext } from '../../src/helpers/ProductsContext';
import { getTotalPrice } from '../helpers/cartTotal';
import { Link } from 'react-router-dom';

const CartOverview = () => {
    const [allProducts, cartItems, dispatch] = useContext(ProductsContext);
    return (
        <li>
            <hr />
            <div className="cartOverview">
                <li className="productTab"></li>
                <li className="qtyTab"><span>CART OVERVIEW</span><span></span><br /></li>
                <li className=" priceSubtotal"><span>SUBTOTAL</span><span>${getTotalPrice(cartItems).toFixed(2)}</span></li>
                <li className=" priceTotal"> <span>TOTAL</span><span>${getTotalPrice(cartItems).toFixed(2)}</span></li>
            </div>
            <hr className="clear" />
            <div className="cartActions">
                <span><Link to="/" className="continueShopping">CONTINUE SHOPPING</Link></span>
                <Link to="/cart" className="actionButtonCart">CHECKOUT</Link>
            </div>
        </li>
    )
}

export default CartOverview;
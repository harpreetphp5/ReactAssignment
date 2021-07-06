import React, { useContext } from 'react';
import { Link, Route } from 'react-router-dom';
import { getTotalPrice, getTotalQty } from '../helpers/cartTotal';
import { ProductsContext } from '../../src/helpers/ProductsContext';

const CartPopup = () => {
    const [allProducts, cartItems, dispatch] = useContext(ProductsContext);
    return(
    <header className="Cart-header">
        <ul to="/cart" className="CartList">
            <li><Link className="myCartLink" to="/cart">MY CART ({getTotalQty(cartItems)})</Link><ul>
                {
                    cartItems.map(
                        p => (
                            <li className="cartLayout">
                                <div>
                                    <img src={'/media/' + p.items.image} />
                                </div>
                                <div>
                                    <h3 className="title">
                                        {p.title}
                                        <span className="qty">
                                            x{p.qty}
                                        </span>

                                    </h3>


                                    <p className="brand">{p.items.brand}</p>
                                    <p className="price cartColor">${(p.items.price).toFixed(2)}</p>
                                    <span>
                                        <button className="crossDel" onClick={() => dispatch({ type: 'DELETE_CART', payload: p.title })}>X</button>
                                    </span>
                                </div>
                            </li>
                        )
                    )
                }
                <li>
                    <hr />
                    <div className="cartTotal">
                        <span>TOTAL</span><span>${(getTotalPrice(cartItems)).toFixed(2)}</span>
                    </div>
                    <div className="cartActions">
                        <Link to="/cart" className="actionButtonCartWhite">CHECKOUT</Link>
                        <Link to="/cart" className="actionButtonCart">VIEW CART</Link>
                    </div>
                </li>
            </ul></li>

        </ul>

        </header>
    )
}

export default CartPopup;
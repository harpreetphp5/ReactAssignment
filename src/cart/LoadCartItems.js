import React, { useContext } from 'react';
import { ProductsContext } from '../../src/helpers/ProductsContext';

export const updateCartQty = (identifier, prod, dispatch) => {

    if (prod.qty < 2 && identifier == -1) {
        dispatch({ type: 'DELETE_CART', payload: prod.title });
        return 'deleted last item';
    }
    dispatch({ type: 'UPDATE_CART', payload: { title: prod.title, items: prod, qty: identifier } });
    return 'updated quantity';
}

export const LoadData = (items, dispatch) => {
    return (
        items.map(
            p => (
                <>
                    <hr />
                    <div className="cartWrap">
                        <li className="productTab cartPage">
                            <div>
                                <img src={'/media/' + p.items.image} />
                            </div>
                            <div>
                                <p className="brand">{p.items.brand}</p>
                                <h3 className="title">{p.title}</h3>
                                <p className="color">COLOR: {p.items.color}</p>
                            </div>
                        </li>
                        <li className="qtyTab">
                            <div className="qtyBox">
                                <input className="qtyType" type="text" value={p.qty} />
                            </div>
                            <div className="qtyBtns">
                                <button onClick={() => updateCartQty(+1, p, dispatch)}>+</button>
                                <button onClick={() => updateCartQty(-1, p, dispatch)} className="second">-</button>
                            </div>
                        </li>
                        <li className="totalTab">
                            ${(p.qty * p.items.price).toFixed(2)}
                        </li>
                        <li className="actionTab">
                            <button className="crossDelSimple" onClick={() => dispatch({ type: 'DELETE_CART', payload: p.title })}>X</button>
                        </li>
                    </div>

                </>
            ))
    )
}

export const LoadCartItems = () => {
    const [allProducts, cartItems, dispatch] = useContext(ProductsContext);
    
    return (
        LoadData(cartItems, dispatch)
        )
}

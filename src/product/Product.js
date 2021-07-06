import React, { Component, useContext, useState, useEffect } from 'react';
import './Product.css';
import { ProductsContext, CartContext } from '../../src/helpers/ProductsContext';


const LoadProduct = ({ match }) => {
    const [allProducts, cartItems, dispatch] = useContext(ProductsContext);
    const [thisProd, setThisProd] = useState([]);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        setQty(1);
        const newprod = allProducts.find(p => (p.title == match.params.id));
        setThisProd(newprod);

    }, []);

    const convertPrice = (price) => {
        return parseFloat(price).toFixed(2);
    }
    const UpdateQty = (identfier) => {
        if (qty == 0 && identfier == -1) {
            return;
        }
        setQty((identfier + qty));
    }
    const addToCart = () => {
        if (qty < 1) {
            return;
        }
        const alreadyExisting = cartItems.find(p => (p.title == thisProd.title));
        if (!!alreadyExisting) {
            dispatch({ type: 'UPDATE_CART', payload: { title: thisProd.title, items: thisProd, qty: qty } });
        } else {
            dispatch({ type: 'ADD_CART', payload: { title: thisProd.title, items: thisProd, qty: qty } });
        }
    }

    return (
        <div className="Product" >
            <div className="firstHalf">
                <img src={'/media/' + thisProd.image} />
            </div>
            <div className="secondHalf">
                <p className="brand">{thisProd.brand}</p>
                <h1>{thisProd.title}</h1>
                <p className="price">${convertPrice(thisProd.price)}</p>
                <p className="desc">{thisProd.description}</p>
                <hr />
                <div className="productActionSection">
                    <li className="qtyTab">
                        <div className="qtyBox">
                            <input className="qtyType" type="text" value={qty} />
                        </div>
                        <div className="qtyBtns">
                            <button onClick={() => UpdateQty(+1)}>+</button>
                            <button onClick={() => UpdateQty(-1)} className="second">-</button>
                        </div>
                    </li>
                    <button className="actionProductBtn" onClick={() => addToCart()}>Add to Cart</button>
                </div>
            </div>
        </div >
    )
}
const Product = ({ match }) => {

    return (
        <LoadProduct match={match} />
        )
};

export default Product;

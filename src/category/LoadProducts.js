import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../src/helpers/ProductsContext';

const LoadProducts = () => {

    const [allProducts, cartItems, dispatch] = useContext(ProductsContext);

    const updateCart = (id) => {
        const matchedProd = allProducts.find(p => (p.title == id));

        const alreadyExisting = cartItems.find(p => (p.title == matchedProd.title));
        if (!!alreadyExisting) {
            dispatch({ type: 'UPDATE_CART', payload: { title: matchedProd.title, items: matchedProd, qty: 1 } });
        } else {
            dispatch({ type: 'ADD_CART', payload: { title: matchedProd.title, items: matchedProd, qty: 1 } });
        }
    }

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    return (

        allProducts.map(p => (
            <div key={p.title} className="productsGrid">
                <div className="imageWrap">
                    <img src={'./media/' + p.image} />
                    <div className="actionButtons">
                        <Link to={"/product/" + p.title} className="action">View Details</Link>
                        <button className="action" onClick={() => updateCart(p.title)} > Add to Cart</button>
                    </div>
                </div>
                <p className="brand">{p.brand}</p>
                <p className="title">{p.title}</p>
                <p className="price">${(p.price).toFixed(2)}</p>
            </div >
        ))

    )
}

export default LoadProducts;
import React, { useState, useEffect, useReducer } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Category from './category/Category';
import Cart from './cart/Cart';
import Product from './product/Product';
import { ProductsContext } from '../src/helpers/ProductsContext';
import { reducer } from './helpers/cartReducer';
import CartPopup from './cart/CartPopup';
import Navigation from './nav/Navigation';
import Logo from './nav/Logo';

const App = () => {

    /*loading products in the state as the App runs and will use the same to amend the cart items.*/
    const [products, setProducts] = useState([]);

    //reducer to keep record of cart items throughout the app.
    const [cartItems, dispatch] = useReducer(reducer, []);

    const apiUrl = './products.json';

    const getProducts = async () => {
        try {
            const response = fetch(apiUrl, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((data) => setProducts(data));

            

        } catch (error) {
            console.log(error);
        }
    } 
    //Using this React hook to load products from the json file  
    useEffect(() => {

        getProducts();
       
    }, [])

    return (
        <ProductsContext.Provider value={[products, cartItems, dispatch]}>
            <div className="App">

                {/*
                  top bar has three parts Logo, navigation, and cart popup
                  I have created three components inside the div
                */}

                <div className="TopHeader">
                    <Logo />
                    <Navigation/>
                    <CartPopup cartItems={cartItems} />
                </div>
                {/* loading category component when on home page.
                    category page also has banner in it. */}
                <div className="storeProducts">
                    <Route exact path="/" component={Category} />
                </div>

                {/* loading cart component when on cart page */}
                <Route path="/cart" component={Cart} />

                {/* loading product component when on individual product page */}
                <Route path="/product/:id" component={Product} />

            </div>
        </ProductsContext.Provider>
    );
};

export default App;

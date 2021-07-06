import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { getTotalPrice, getTotalQty } from '../helpers/cartTotal';

it('counts total price of the cart', () => {
    const mockCart = [
        {
            title: "a",
            items: {
                "title": "a", "brand": "A", "price": 100,
                "description": "test A desc", "image": "a.jpg", "color": "Alpha"
            },
            qty: 1
        },
        {
            title: "b",
            items: {
                "title": "b", "brand": "B", "price": 56,
                "description": "test B desc", "image": "b.jpg", "color": "Blue"
            },
            qty: 2
        }
    ]

    expect(getTotalPrice(mockCart)).toEqual(212);
});

it('counts total quantity of the items in cart', () => {
    const mockCart = [
        {
            title: "a",
            items: {
                "title": "a", "brand": "A", "price": 100,
                "description": "test A desc", "image": "a.jpg", "color": "Alpha"
            },
            qty: 1
        },
        {
            title: "b",
            items: {
                "title": "b", "brand": "B", "price": 56,
                "description": "test B desc", "image": "b.jpg", "color": "Blue"
            },
            qty: 2
        }
    ]

    expect(getTotalQty(mockCart)).toEqual(3);
});
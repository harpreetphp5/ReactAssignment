import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { LoadCartItems, LoadData } from '../cart/LoadCartItems'
import { reducer } from '../helpers/cartReducer';

it('renders without crashing', () => {
    const mockCartItems = [
        {
            title: "Hand Painted Blue Flat Dish",
            items: {
                "title": "Hand Painted Blue Flat Dish",
                "brand": "Kiriko",
                "price": 28,
                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget arcu. Curabitur ac pharetra nisl, sit amet mattis dolor.",
                "image": "hand-painted-blue-flat-dish.jpg",
                "color": "Blue" },
            qty: 1
        }
    ]
    expect(LoadData(mockCartItems)).toMatchSnapshot();
});



describe('reducer testing', () => {

    it('should return the initial state', () => {
        expect(reducer('', {})).toEqual('');
    });

    it('should Add to cart', () => {
        const mockCartItems2 =
        {
            title: "Hand Painted Blue Flat Dish",
            items: {
                "title": "Hand Painted Blue Flat Dish",
                "brand": "Kiriko",
                "price": 28,
                "description": "test data",
                "image": "hand-painted-blue-flat-dish.jpg",
                "color": "Blue"
            },
            qty: 1
        };
        expect(reducer([], { type: "ADD_CART", payload: mockCartItems2 })).toEqual([mockCartItems2]);

    });

    it('should set update quantity to 3', () => {
        const mockCartItems =
        {
            title: "Hand Painted Blue Flat Dish",
            items: {
                "title": "Hand Painted Blue Flat Dish",
                "brand": "Kiriko",
                "price": 28,
                "description": "test data",
                "image": "hand-painted-blue-flat-dish.jpg",
                "color": "Blue"
            },
            qty: 1
        };

        const state = reducer([mockCartItems], { type: "UPDATE_CART", payload: { title: "Hand Painted Blue Flat Dish", qty: 2 } });

        expect(state.map((p) => p.qty ? p.qty : p)).toEqual([3]);
    });

    it('expect state to increase in length by 1 when added to cart', () => {
        const mockCartItems =
        {
            title: "Hand Painted Blue Flat Dish",
            items: {
                "title": "Hand Painted Blue Flat Dish",
                "brand": "Kiriko",
                "price": 28,
                "description": "test data",
                "image": "hand-painted-blue-flat-dish.jpg",
                "color": "Blue"
            },
            qty: 1
        };

        const newOutput = { "items": { "brand": "Kiriko", "color": "Blue", "description": "test data", "image": "hand-painted-blue-flat-dish.jpg", "price": 28, "title": "New Title" }, "qty": 3, "title": "Hand Painted Blue Flat Dish" };

        const state = reducer([mockCartItems], { type: "ADD_CART", payload: newOutput } );

        expect(state.length).toEqual(2);
    });

    it('expect state to decrease in length by 1 when delete from cart', () => {
        const mockCartItems =
        {
            title: "Hand Painted Blue Flat Dish",
            items: {
                "title": "Hand Painted Blue Flat Dish",
                "brand": "Kiriko",
                "price": 28,
                "description": "test data",
                "image": "hand-painted-blue-flat-dish.jpg",
                "color": "Blue"
            },
            qty: 1
        };


        const state = reducer([mockCartItems], { type: "DELETE_CART", payload: 'Hand Painted Blue Flat Dish' });

        expect(state).toEqual([]);
    });
});




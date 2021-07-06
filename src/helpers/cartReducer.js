import React from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CART':
            return [...state, action.payload];
        case 'UPDATE_CART':
            return state.map(p => (p.title == action.payload.title) ? ({ ...p, qty: p.qty + action.payload.qty }) : p)
        case 'DELETE_CART':
            return state.filter(e => e.title != action.payload);
        default:
            return state;
    }
}
import React from 'react';
// returns total sum of price of the all items in the cart 
const getTotalPrice = (cartStuff) => {
    var total = 0;
    cartStuff.map(stuff => (
        total += (stuff.qty*stuff.items.price))
    )
    return total;
}
// returns total number of items in the cart
const getTotalQty = (cartStuff) => {
    var total = 0;
    cartStuff.map(stuff => (
        total += stuff.qty)
    )
    return total;
}

export {getTotalPrice, getTotalQty}
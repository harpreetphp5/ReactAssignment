import React from 'react';

const CartHeader = () => {
    return(
        <>
            <li className = "productTab" > PRODUCT</li>
            <li className="qtyTab">QUANTITY</li>
            <li className="totalTab">TOTAL</li>
            <li className="actionTab">ACTION</li>
        </>
    )
}

export default CartHeader;
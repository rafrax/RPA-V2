import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';

const CartWidget = () => {
    const {cartSize} = useContext(CartContext);
    return (
        <>
        {cartSize() > 0 ? (<span>({cartSize()})</span>) : ('')}
        </>
    )
}
export default CartWidget;

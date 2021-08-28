import React from "react";
import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import NavBar from "./navBar";

const Cart = () => {
    const cart = useContext(CartContext);
    console.log('cart', cart)

    return(
        <div>
                <div> <NavBar /></div>
                <h1>No mostrar nada</h1>
        </div>
    );
}

export default Cart
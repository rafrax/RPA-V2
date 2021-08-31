// import React, { useEffect } from "react"
// import { useState } from "react";

// export const CartContext = React.createContext([]);

// export const CartProvider = ({ children }) => {
//     const [items, setItems] = useState([])
//     const inCart = (id) => items.find(item => item.id === id) !== undefined;

//     const addItem = (item, cant) => {
//         if (inCart(item.id)) {
//             setItems(
//                 items.map((i) => {
//                     if (i.item.id === item.id) i.cant = i.cant + cant;
//                     return i;
//                 })
//             );
//         } else {
//             setItems([...items, { item, cant }]);
//         }
//     }

//     const removeItem = (id) => {
//         const newItems = items.filter(item => item.id !== id)
//         setItems(newItems)
//     }

//     const clearAll = () => setItems([])

//     useEffect(() => {
//         console.log('cart', items)
//     }, [items])

//     return (
//         <CartContext.Provider value={{items, inCart, addItem, removeItem, clearAll}}>
//             {children}
//         </CartContext.Provider>    
//     );
// }
// export default CartProvider;

import React, { useEffect } from "react";
import { useState } from "react";

export const CartContext = React.createContext([]);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const inCart = (id) => {
        const resultado = items.find(obj => obj.item.id === id) !== undefined ? true : false;
        return resultado;
    }
    const cartSize = () => items.reduce((a, b) => a + b.q, 0)
    const addItem = (item, q) => {
        if (inCart(item.id)) {
            setItems(
                items.map((i) => {
                    if (i.item.id === item.id) i.q = i.q + q;
                    return i;
                })
            );
        } else {
            setItems([...items, { item, q}]);
        }
    }

    const onIncrease = (id) => {
        setItems(
            items.map((i) => {
                if (i.item.id === id) i.q += 1;
                return i;
            })
        );
    }
    const onDecrease = (id) => {
        setItems(
            items.map((i) => {
                if (i.item.id === id && i.q>1) i.q -= 1;
                return i;
            })
        );
    }
    const removeItem = (id) => {
        const newItems = items.filter(obj => obj.item.id !== id)
        setItems(newItems)
    }
    const clearAll = () => setItems([])
    useEffect(() => {
        console.log('items', items)
    }, [items])

//     return (
//         <CartContext.Provider value={{items, inCart, addItem, removeItem, clearAll}}>
//             {children}
//         </CartContext.Provider>    
//     );

    return (
        <CartContext.Provider value={{items, inCart, addItem, removeItem, clearAll, cartSize, onIncrease, onDecrease}}>
            {children}
        </CartContext.Provider>    
    );
}
export default CartProvider;
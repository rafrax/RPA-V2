// import React from "react";
// import { useContext } from "react";
// import { CartContext } from "./context/CartContext";
// import NavBar from "./navBar";

// const Cart = () => {
//     const cart = useContext(CartContext);
//     console.log('cart', cart)

//     return(
//         <div>
//                 <div> <NavBar /></div>
//                 <h1>No mostrar nada</h1>
//         </div>
//     );
// }

// export default Cart

import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from './context/CartContext';
import NavBar from "./navBar";
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const {items, removeItem, clearAll, cartSize, onIncrease, onDecrease} = useContext(CartContext);
    const subtotal = items.reduce((a,b) => a + b.item.precio*b.q, 0);
    const total = subtotal;

    return(
        <div>
            <NavBar />
            <div className="container my-auto">
                <div className="row ">
                    <div className="col-8">
                        <h3>Peliculas</h3>
                        <div className="border">
                            {cartSize(items) > 0 ? (
                                items.map((prod) => ( 
                                <>
                                <div key={prod.id} className="my-2">
                                    <div>
                                        <div className="row product-details-flex">
                                            <div className="col-3 offset-1">
                                                <img src={prod.item.imagen} alt="pelicula.jgp" width="120" />
                                            </div>
                                            <div className="col-6">
                                                    <h5>{prod.item.nombre}</h5>
                                                    <h6>{prod.item.tipo}</h6>
                                                    <hr></hr>
                                                <div className="center" >
                                                    <Button variant="primary" onClick={() => onDecrease(prod.item.id)}>-</Button> 
                                                        &nbsp; {prod.q} &nbsp;
                                                    <Button variant="primary" onClick={() => onIncrease(prod.item.id)}>+</Button>
                                                </div>
                                                    <hr></hr>
                                                <div className="center">
                                                    <Button variant="warning" onClick={()=> removeItem(prod.item.id)}>Eliminar</Button>
                                                </div>                                            
                                            </div>                                            
                                        </div>
                                    </div>                                    
                                </div> 
                                </> ))
                            ) : (
                                <>
                                <div>
                                    <Link to="/"><Button className="col-3 center" variant="secondary">Llevame a la tienda</Button></Link> 
                                </div>
                                </>
                            )}
                            {cartSize(items) > 0 ? (<>
                                <div className="row">
                                    <Button className="col-3 center" variant="danger" onClick={() => clearAll()}>Vaciar Carro</Button>
                                </div> 
                                </>) : (<> </>)
                            }
                        </div>               
                    </div>

                    <div className="col-4">
                    <h5>Resumen de compra</h5>
                        <div>
                            <div className="my-auto">
                                <p>Subtotal: ${subtotal}</p>
                            </div>
                            <hr></hr>
                            <div className="my-auto">
                                <p>Total: ${total}</p>
                            </div>
                            <hr></hr>
                            <div className="my-auto">
                                <Button variant="success">Pagar</Button> &nbsp;
                                <Link to="/" ><Button variant="primary">Volver a tienda</Button></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Cart
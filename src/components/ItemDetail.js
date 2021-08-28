import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import './styles/styles.css';
import { Link } from 'react-router-dom';
import { Comprar } from './Comprar';
import { CartContext } from './context/CartContext';


function ItemDetail (item){

    const [compras, setcompras] = useState(0);
    const [mostrarBtn, setmostrarBtn] = useState(false)
    const { addItem } = useContext(CartContext);

    const onAdd = (a) => {
        setcompras(a);
        setmostrarBtn(true)
    }

    const onComprar = (item, a) => {
        addItem(item, a);
    }

    return (
        <div className="row itemDetail align-middle">
            <div className="col-6 dimg">
                <img src={item.imagen} alt="Pelicula.jpg" />
            </div>
            <div className="col-6 dinf my-auto">
                <h3 className="cardTitulo">{item.nombre}</h3>
                <h4 className="cardSubtitulo">{item.tipo}</h4>
                <p className="cardPrecio">${item.precio}</p>
                <div className="align-self-center">

                {compras === 0 ? (
                        <ItemCount stock={item.stock} inicial={item.inicial} onAdd={onAdd} />
                    ): (
                        compras >= 1 && mostrarBtn && <Link to="/cart" > 
                        <Comprar cant={compras} item={item} onAgregar={onComprar}/> </Link>
                        
                        )}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
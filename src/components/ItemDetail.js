import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import './styles/styles.css';
import { Comprar} from './Comprar';
import { Link } from 'react-router-dom';


function ItemDetail ({id, nombre, tipo, precio, imagen, stock, inicial}){

    const [compras, setcompras] = useState(inicial);
    const [mostrarBtn, setmostrarBtn] = useState(false);
    const onAdd = (cant) => {
        setcompras(cant);
        setmostrarBtn(true)
    }


    return (
        <div className="row itemDetail align-middle">
            <div className="col-6 dimg">
                <img  src={imagen} alt="Pelicula.jpg" />
            </div>
            <div className="col-6 dinf my-auto">
                <h1 className="cardTitulo">{nombre}</h1>
                <h2 className="cardSubtitulo">{tipo}</h2>
                <p className="cardPrecio">${precio}</p>
                <div className="align-self-center">
                    
                    {compras === 1 ? (
                        <ItemCount stock={stock} inicial={inicial} onAdd={onAdd}/>
                    ): (
                        compras >= 1 && mostrarBtn && <Link to="/cart" > 
                        <Comprar cant={compras}/> </Link>
                        
                        )}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
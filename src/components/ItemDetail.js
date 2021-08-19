import React from 'react';
import { Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import './styles/styles.css';


function ItemDetail ({id, nombre, tipo, precio, imagen, stock, inicial}){

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
                    <ItemCount stock={stock} inicial={inicial}/>
                    
                </div>
                <Button id={id} variant="info">+ Agregar</Button>
            </div>
        </div>
    );
}

export default ItemDetail;
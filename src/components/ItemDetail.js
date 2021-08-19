import React from 'react';
import { Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
import './styles/styles.css';


function ItemDetail ({id, nombre, tipo, precio, imagenURL, max, cantidad}){

    return (
        <div className="row itemDetail align-middle">
            <div className="col-6 dimg">
                <img  src={imagenURL} alt="Pelicula.jpg" />
            </div>
            <div className="col-6 dinf my-auto">
                <h1 className="cardTitulo">{nombre}</h1>
                <h2 className="cardSubtitulo">{tipo}</h2>
                <p className="cardPrecio">${precio}</p>
                <div className="align-self-center">
                    <ItemCount max={max} cantidad={cantidad}/>
                    <p>Stock: {max}</p>
                </div>
                <Button id={id} variant="info">+ Agregar</Button>
            </div>
        </div>
    );
}

export default ItemDetail;
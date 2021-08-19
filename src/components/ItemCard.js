import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import ItemCount from './ItemCount';
import './styles/styles.css';


function ItemCard ({id, nombre, tipo, precio, imagenURL, max, cantidad}){

    const history = useHistory();
    const goToDetail = () => history.push(`/itemDetail/${id}`);

    return (
        <div className="col-3 my-3">
            <Card className="h-100" style={{ width: '14rem' }}>
            <Card.Img variant="top" src={imagenURL} width="222" height="222"/>
            <Card.Body>
                <Card.Title className="cardNombre">{nombre}</Card.Title>
                <Card.Subtitle className="cardTipo">{tipo}</Card.Subtitle>
                <Card.Text className="cardPrecio">${precio}</Card.Text>
                <div className="col text-center"><Button onClick={goToDetail} id={id} variant="info">+ Detalles</Button></div>
            </Card.Body>
            </Card>
        </div>
    );
}

export default ItemCard;
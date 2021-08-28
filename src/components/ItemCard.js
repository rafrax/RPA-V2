import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './styles/styles.css';


function ItemCard (item){

    const history = useHistory();
    const goToDetail = () => history.push(`/itemDetail/${item.id}`);

    return (
        <div className="col-4 my-3">
            <Card border="dark" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imagen}/>
            <Card.Body>
                <Card.Title className="cardNombre">{item.nombre}</Card.Title>
                <Card.Subtitle className="cardTipo">{item.tipo}</Card.Subtitle>
                <Card.Text className="cardPrecio">${item.precio}</Card.Text>
                <div className="col text-center"><Button onClick={goToDetail} id={item.id} variant="info">+ Detalles</Button></div>
            </Card.Body>
            </Card>
        </div>
    );
}

export default ItemCard;
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './styles/styles.css';


function ItemCard ({id, nombre, tipo, precio, imagen, stock, inicial}){

    const history = useHistory();
    const goToDetail = () => history.push(`/itemDetail/${id}`);

    return (
        <div className="col-4 my-3">
            <Card border="dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen}/>
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
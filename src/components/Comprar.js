import { Button } from 'react-bootstrap';

export const Comprar = ({cant, onAgregar, item}) => {
    return (
    <div>
        <hr></hr>
            <Button variant="success" onClick={() => onAgregar(item, cant)}>Comprar {cant} entradas</Button>
    </div>
    )
}
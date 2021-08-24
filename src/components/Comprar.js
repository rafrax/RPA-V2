import { Button } from 'react-bootstrap';

export const Comprar = ({cant}) => {
    return (
        <div>
            <hr></hr>
                <Button variant="success">Comprar {cant} entradas </Button>
        </div>

    )
}
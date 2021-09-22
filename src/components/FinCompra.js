import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import Button from 'react-bootstrap/Button';

export const FinCompra = () => {

    const { id } = useParams();


    return(
        <>
        <div>
            <NavBar/>
            <h2> Su compra ha finalizado exitosamente</h2>
            <br></br>
            <h5> Su numero de seguimiento es:  <b>{id}.</b></h5>

            <div>
                <Link to="/"><Button className="col-3 center" variant="secondary">Volver a la tienda</Button></Link> 
            </div>
        </div>
        </>
    )
}

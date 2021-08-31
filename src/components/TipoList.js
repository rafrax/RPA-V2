import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from './ItemCard';
import ListMovies from './productos.json';
import './styles/styles.css'
import NavBar from './navBar';


function TipoList() {
    const {tipo} = useParams();
    const [items, setItems] = useState([]);
    const getItems = (ab) => {
    const selected = ListMovies.filter( (tipo) => tipo.tipo === ab)
    setItems(selected);
    }

    useEffect( () => {
            getItems(tipo);
        }
    )
    
    return(
            <div>
                <NavBar />
                <h1>Peliculas de {tipo}</h1>
                <div className="container">
                    <div className="row">
                        <> 
                        {items.map(producto => {
                            const { id, nombre, tipo, precio, imagen, stock, inicial } = producto;
                            return (
                            <ItemCard
                                key={id}
                                id={id}
                                nombre={nombre}
                                tipo={tipo}
                                precio={precio}
                                imagen={imagen}
                                stock={stock}
                                inicial={inicial}/>
                                );
                        })};
                        </>
                    </div>
                </div>
            </div>
    );
}
export default TipoList;
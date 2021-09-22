import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from './ItemCard';
import ListMovies from './productos.json';
import './styles/styles.css'
import NavBar from './navBar';
import { getFirestore } from '../firebase';


function TipoList() {
    const {tipo} = useParams();
    const [items, setItems] = useState([]);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const crafter = itemCollection.where("tipo", "==", tipo);

    useEffect( () => {
    crafter
    .get()
    .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("Not found");
            }
            setItems(
                querySnapshot.docs.map(document => ({
                    id: document.id,
                    ...document.data(),
                }))
            );
        })
        .catch((error) => console.log(error));
    }, [crafter]);
    
    return(
            <div>
                <NavBar />
                <h1>Peliculas de {tipo}</h1>
                <div className="container">
                    <div className="row">
                    <> 
                        {items.map((item) => (
                            <ItemCard
                                key={item.id}
                                id={item.id}
                                nombre={item.nombre}
                                tipo={item.tipo}
                                precio={item.precio}
                                imagen={item.imagen}
                                stock={item.stock}
                                inicial={item.inicial}/>
                                )
                        )}
                        </>
                    </div>
                </div>
            </div>
    );
}
export default TipoList;
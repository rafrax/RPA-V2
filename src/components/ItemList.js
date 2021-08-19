import { React, useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ListProducts from './productos.json'


function ItemList () {

    const [items, setItems] = useState([]);
    
    useEffect(
        () => {
        setTimeout(async () => {
            setItems(ListProducts);
        }, 2000);
        },
    );

    return (
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
    );
}
export default ItemList;
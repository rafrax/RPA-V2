import React, { useState } from 'react'
import Item from './Item';
import ItemDetailContainer from './ItemDetailContainer';
import ItemCount from './ItemCount';

const Itemlist = () => {
    const [movies, setMovies] = React.useState([]);

    const cargarMovies = () => {
    const promesaCargarProducto = new Promise((resolve) => setTimeout(() => {
        resolve([
            {
                id:1,
                nombre: "Los Vengadores",
                tipo: "Accion",
                img:"https://i.pinimg.com/originals/3e/00/91/3e00913037297f57c7fd25502e555d2b.png"
            }
        ]);
    }, 2000)
    );

    promesaCargarProducto.then(res => {
        setMovies(res);
    });
};

cargarMovies();

    return (
        <div className='center_div'>
            {movies.map(item => <Item key={item.id} nombre={item.nombre} tipo={item.tipo} img={item.img} />) } 
            <ItemDetailContainer/>
            
        </div>
    )
}

export default Itemlist;

import React from 'react';
import ItemCount from './ItemCount';


const ItemDetail = ({movie}) => {
    return (
        <div className='movie_card' key={movie.id}>
            <img alt="" src= {movie.img} />
            <p>{movie.nombre}</p>
            <p>{movie.tipo}</p>
            <p><ItemCount stock={10} initial={0} onAdd={1}/></p>
        </div> 
    );
}

export default ItemDetail;
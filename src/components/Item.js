import React from 'react'
import ItemCount from './ItemCount';

const Item = ({img, nombre, tipo}) => {
    return (
        <div className='movie_card'>
            <img src={img}/>
            <p>{nombre}</p>
            <p>{tipo}</p>
            <p><ItemCount stock={5} initial={0} onAdd={1}/></p>
        </div>
    )
}

// const Item = (props) => {
//     return (
//         <div key={props.id}>
//             <img src= {props.img} alt="" />
//             <p>{props.nombre}</p>
//             <p>{props.tipo}</p>
//         </div> 
//     )
// }

export default Item;

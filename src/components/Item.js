import React from 'react'

const Movie = (props) => {
    return (
        <div key={props.id}>
            <img src= {props.img} />
            <p>{props.nombre}</p>
            <p>{props.tipo}</p>
        </div> 
    )
}

export default Movie;

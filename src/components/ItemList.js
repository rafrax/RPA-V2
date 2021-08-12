import React, { useState } from 'react'
import Movie from './Item';


const Movies = () => {
    const [movies, setMovie] = useState([
        {
            id:1,
            nombre: "Los Vengadores",
            tipo: "Accion",
            img:"https://i.pinimg.com/originals/3e/00/91/3e00913037297f57c7fd25502e555d2b.png"
        },
        {
            id:2,
            nombre: "Los Vengadores",
            tipo: "Accion",
            img:"https://i.pinimg.com/originals/3e/00/91/3e00913037297f57c7fd25502e555d2b.png"
        }
    ]);
    
    return (
        <div className='center_div'>
            {movies.map(movie =>{
                return(
                <Movie 
                id={movie.id} 
                nombre={movie.nombre}
                img={movie.img} 
                tipo={movie.tipo}
                />
                )
            })
            }
        </div>
    )
}

export default Movies;

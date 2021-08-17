import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [movie, setMovie] = React.useState([]);
    
    const cargarMovie = () => {
        const promesaCargarProducto = new Promise((resolve) => setTimeout(() => {
            resolve([
                {
                    id:1,
                    nombre: "Pelicula Detalle",
                    tipo: "Accion",
                    img:"https://i.pinimg.com/originals/3e/00/91/3e00913037297f57c7fd25502e555d2b.png"
                }
            ]);
        }, 2000)
        );
    
        promesaCargarProducto.then(res => {
            setMovie(res);
        });
    };
    
    cargarMovie();
    
        return (
            <div >
                {movie.map(movie =>{
                    return(
                    <ItemDetail movie={movie}/>
                    )
                })
                }
                
            </div>
        )
    }
    
    export default ItemDetailContainer;
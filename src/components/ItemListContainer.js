import React from 'react';
import ItemList from './ItemList';
import './styles/styles.css'

function ItemListContainer() {
    return(
            <div>
                <h1>Elige tu pelicula</h1>
                <div className="container">
                    <div className="row">
                        <ItemList />
                    </div>
                </div>
            </div>
    );
}

export default ItemListContainer;
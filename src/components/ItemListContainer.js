import React from 'react';
import ItemList from './ItemList';
import './styles/styles.css';
import NavBar from './navBar';

function ItemListContainer() {
    return(
            <div>
                <div> <NavBar /></div>
                <h1>Elige tu pelicula!</h1>
                <div className="container">
                    <div className="row">
                        <ItemList />
                    </div>
                </div>
            </div>
    );
}

export default ItemListContainer;
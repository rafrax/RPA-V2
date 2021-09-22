import { getFirestore } from '../firebase';
import { React, useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ListProducts from './productos.json'
import { QuerySnapshot } from 'firebase/firestore';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log("not found");
            }
            setItems(querySnapshot.docs.map(document => ({
                id: document.id,
                ...document.data(),
            }))
        );

        }) 
        .catch((error) => console.log(error))
        .finally(() => setloading(false))
    }, []);

return (
        <>
        {loading && <h2>Loading...</h2>}
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
    )
}

export default ItemList;
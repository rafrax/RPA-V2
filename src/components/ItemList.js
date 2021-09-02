import { getFirestore } from '../firebase';
import { React, useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import ListProducts from './productos.json'
import { QuerySnapshot } from 'firebase/firestore';


// function ItemList () {

//     const [items, setItems] = useState([]);
    
//     useEffect(
//         () => {
//         setTimeout(async () => {
//             setItems(ListProducts);
//         }, 2000);
//         },
//     );

//     return (
//         <>
//             {items.map(producto => {
//                 const { id, nombre, tipo, precio, imagen, stock, inicial } = producto;
//                 return (
//                 <ItemCard
//                     key={id}
//                     id={id}
//                     nombre={nombre}
//                     tipo={tipo}
//                     precio={precio}
//                     imagen={imagen}
//                     stock={stock}
//                     inicial={inicial}/>
//                     );
//             })};
//         </>
//     );
// }
// export default ItemList;

// const itemId ='ZIy7sbbuP8amLcjU94Aa';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState(null);
    const [itemsWidthHighPrice, setitemsWidthHighPrice] = useState([]);
    const [loading, setloading] = useState(false);
    console.log('items', items);
    console.log('item', item);
    console.log('itemsWidthHighPrice', itemsWidthHighPrice);

    useEffect(() => {
        setloading(true);
        const db = getFirestore();
        const itemCollection = db.collection("items");
        // const currentItem = itemCollection.doc(itemId);
        // const highPrice = itemCollection.where("price", ">", 500);

// Llamada coleccion
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

// // Llamada documento
//         currentItem.get().then((document) =>{
//             if (!document.exists) {
//                 console.log("not found");
//                 return
//             }
//             setItem({id: document.id, ...document.data() });
//         })

// // Llamada con filtro
//     highPrice
//     .get()
//     .then((querySnapshot) =>
//     setitemsWidthHighPrice (
//         querySnapshot.docs.map((document) => document.data())
//     )
//     ).catch((error) => console.log("error, error"));



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
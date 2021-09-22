import React, { useContext, useState } from "react";
import { CartContext } from './context/CartContext';
import { useHistory} from "react-router-dom";
import NavBar from "./navBar";
import { getFirestore } from '../firebase';
import firebase from 'firebase/compat/app';
import { Form, Button } from "react-bootstrap";


const Checkout = () => {
    const db = getFirestore();
    const {items, cartSize, clearAll} = useContext(CartContext);
    const history = useHistory();
    const saveHistory = (id) => history.push(`/FinCompra/${id}`);

    const subtotal = items.reduce((a,b) => a + b.item.precio*b.q, 0);
    const total = subtotal;

    const [formData, setFormData] = useState({
        nombre: '', 
        apellido:'',
        email2: '',
        telefono: '',
    });


    const handleChangeInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    // const validarEmail = () => {
    //     if (email === email2) {
    //         <p>email correcto</p>            
    //     } else {
    //         <p>email correcto</p>     
    //     }
    // }



    const newOrder = {
            buyer: formData,
            items: items.map(({item, q}) => ({
                item: {
                id: item.id,
                title: item.nombre,
                price: item.precio,
            },
                cantidad: q
            })),
            Total: total,
            Productos: cartSize(),
            date: firebase.firestore.Timestamp.fromDate(new Date()),
        };

    const handleFinishPurchase = (e) => {
        e.preventDefault();
        const orders = db.collection('orders');
        const batch = db.batch();

        orders.add(newOrder).then((response) => {
            console.log(response);
            items.forEach(({item, q}) => {
                const docRef = db.collection('items').doc(item.id)
                batch.update(docRef, {max: item.stock - q})
            });
            batch.commit();
            saveHistory(response.id);
        })
        .catch((error) => console.log('error', error));    
        clearAll()
    }

    return (
        <div>
            
            <NavBar />

            <div className="container ">
                <h1>Finaliza tu compra</h1>
                            <form className="formulario">
                                <div className="row">
                                    <div className="col-6">
                                        <label for="nombre">Nombre</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Jane" 
                                            name="nombre" 
                                            id="nombre" 
                                            value={formData.nombre}
                                            onChange={handleChangeInput}
                                            required/>
                                    </div>
                                    <div className="col-6">
                                        <label for="apellido">Apellido</label>
                                            <input 
                                                type="apellido" 
                                                className="form-control" 
                                                placeholder="Doe" 
                                                name="apellido" 
                                                id="apellido" 
                                                value={formData.apellido}
                                                onChange={handleChangeInput}
                                                required/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <label for="email">Email</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="janedoe@gmail.com" 
                                            className="form-control" 
                                            value={formData.email}
                                            onChange={handleChangeInput}
                                            required/>
                                </div>
                                <div className="col-6">
                                    <label for="email">Re ingresa Mail</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            placeholder="janedoe@gmail.com" 
                                            className="form-control" 
                                            value={formData.email}
                                            onChange={handleChangeInput}
                                            // funcion={validarEmail}
                                            required/>
                                </div>
                                <div className="col-6">
                                    <label for="apellido">Telefono</label>
                                    <input 
                                        type="tel" 
                                        className="form-control" 
                                        placeholder="123-456-7890" 
                                        name="telefono" 
                                        id="telefono" 
                                        value={formData.telefono}
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        onChange={handleChangeInput}
                                        required/>
                                        <small>Formato: 123-456-7890</small>
                                </div>
                                <input 
                                type="submit" 
                                to="/FinCompra"
                                disabled={[formData.nombre, formData.apellido, formData.email, formData.telefono].includes("")}
                                onClick={handleFinishPurchase}
                                class="btn btn-primary center " 
                                id="enviar" 
                                value="Enviar"/>
                            </form>
            </div>
        </div>
    )
}

export default Checkout;
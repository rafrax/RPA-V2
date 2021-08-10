import React, { useState } from "react";
import './styles/BuyCart.css';
import './styles/ButtonBlue.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [num, setNum] = useState (initial);
    
    const incNum = () => {
        if (num >= stock) {
            setNum (stock)
            alert ("Ha alcanzado el limite de stock")
        } else {
            setNum (num + onAdd)
        }
        
    }

    const decNum = () => {
        if (num > 0) {
            setNum (num - onAdd)
        } else {
            setNum(0)
        }

    }
    return (
        <>
        <div className='center_div'>
            <h1>{num}</h1>
            <div>
                <button onClick={decNum} className= 'button_blue'> Eliminar </button>
                <button onClick={incNum} className= 'button_blue'> Agregar </button>
            </div>
            <p>El stock disponible es <strong>{stock-num}</strong></p>
        </div>
        </>
    )
}

export default ItemCount;
import React from 'react';
import ItemCount from './ItemCount'; 

const ItemFunction = ({Texto}) => {
        return <div>
            <p style={{textAlign: "center", marginTop: 100, borderStyle: "outset"}}>
                {Texto}</p>
                <ItemCount stock={10} initial={0} onAdd={1}/>
            </div>
}

export default ItemFunction;
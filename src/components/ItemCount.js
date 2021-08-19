import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import './styles/styles.css';

function ItemCount({ max, cantidad }) {
    const [counter, setCounter] = useState(0);
    return (
      <div className="btnvar">
        <Button variant="primary" onClick={() => {if (counter > cantidad) { setCounter(counter - 1);}
          }}>{" "}-{" "}</Button>
        <p>{counter}</p>
        <Button variant="primary" onClick={() => {if (counter < max) {setCounter(counter + 1);}
          }}>+</Button>
      </div>
    );
}

export default ItemCount;
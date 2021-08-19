import { React, useState } from 'react';
import { Button } from 'react-bootstrap';
import './styles/styles.css';

const ItemCount = ({stock, inicial}) => {
  const [num, setNum] = useState (inicial);
  
  const incNum = () => {
      if (num >= stock) {
          setNum (stock)
          alert ("Ha alcanzado el limite de stock")
      } else {
          setNum (num + 1)
      }
      
  }

  const decNum = () => {
      if (num > 0) {
          setNum (num - 1)
      } else {
          setNum(0)
      }

  }
    return (
      <div>
        <div className="btnvar">
          <Button variant="primary" onClick={decNum}>-</Button>
          <p>{num}</p>
          <Button variant="primary" onClick={incNum}>+</Button>
        </div>
        <br></br>
        <div>
          <p>El stock disponible es <strong>{stock-num}</strong></p>
        </div>
      </div>
      
    );
}

export default ItemCount;
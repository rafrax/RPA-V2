import React, { useState } from 'react';
import NavBar from './navBar';
import ItemListContainer from './ItemListContainer';
import './styles/styles.css';
import { useEffect } from 'react';

function Todas(){

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return(
        <>
        { loading ? <div>
                        <NavBar />
                    </div> : 
                    <div>
                        <NavBar /> 
                        <ItemListContainer /> 
                    </div> }
        </>
    );
}

export default Todas;
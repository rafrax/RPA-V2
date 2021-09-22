import React from 'react';
import NavBar from './navBar';

const Preguntas = () => {
    return (
        <div className="container ">
            <NavBar />
            <h2>Preguntas Frecuentes</h2>
            <br></br>
                <h5>¿Qué es Cine Online?</h5>
                    <p className="textPregunta">
                    Cine Online es una colaboración entre Cinemark y Cining (una empresa BF Distribution) que presentará estrenos exclusivos, y que podrás ver en tu casa a través de un navegador web, o, de forma opcional, utilizando los dispositivos que tengas disponibles.
                    </p>

                    <h5>¿Cuánto tiempo tengo para ver la función?</h5>
                    <p className="textPregunta">
                    Podrás ver tu función dentro de las siguientes 48 horas luego de la compra de tu función, y tendrás tres intentos de reproducción de la misma para una (1) visualización completa.
                    </p>

                    <h5>¿Cuántas personas pueden ver mi función de Cine Online?</h5>
                    <p className="textPregunta">
                    Ya comprado tu Código de Acceso Único (PIN) tienes tres intentos para una (1) visualización completa disponibles, los que deben llevarse a cabo 48 horas después de la compra, pero puedes ver la película acompañado de quien tú quieras.
Recuerda que, si compartes tu código con otra persona, y esa persona lo utiliza, se contabilizará como uno de los tres intentos que tienes disponibles, o la visualización completa si es que ésta es efectiva.
                    </p>
        </div>
    )
}
export default Preguntas;
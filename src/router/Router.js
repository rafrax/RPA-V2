import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Preguntas from '../components/Preguntas'
import Todas from '../components/Todas';
import Error from '../components/Error';
import Cart from '../components/Cart';
import TipoList from '../components/TipoList';
import ItemDetailContainer from '../components/ItemDetailContainer';



export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Todas} />
                <Route path="/itemDetail/:id" component={ItemDetailContainer} />
                <Route exact path="/:tipo" component={TipoList} />
                <Route exact path="/Preguntas" component={Preguntas} />
                <Route exact path="/Cart" component={Cart} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
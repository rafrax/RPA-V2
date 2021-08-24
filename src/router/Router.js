import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Error from '../components/Error';
import Preguntas from '../components/Preguntas'
import ItemListContainer from '../components/ItemListContainer';
import Cart from '../components/cart';


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ItemListContainer} />
                <Route path="/itemDetail/:id" component={ItemDetailContainer} />
                <Route path="/Todas" component={App} />
                <Route path="/Estrenos/:id" component={ItemListContainer} />
                <Route path="/FAQ" component={Preguntas} />
                <Route path="/Cart" component={Cart} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
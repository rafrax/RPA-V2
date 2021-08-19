import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Error from '../components/Error';
import Preguntas from '../components/Preguntas'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/itemDetail/:id" component={ItemDetailContainer} />
                <Route path="/Todas" component={App} />
                <Route path="/Estrenos" component={App} />
                <Route path="/FAQ" component={Preguntas} />
                <Route path="*" component={Error} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;
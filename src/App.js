import {NavBar} from "./components/navBar";
import ItemFunction from './components/ItemListContainer'

function App () {
    return (
        <div className="App">
            <NavBar/>
            <ItemFunction Texto="Carro de compras"/>
        </div>
    );
}

export default App;
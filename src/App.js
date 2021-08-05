import {NavBar} from "./components/navBar";
import ItemFunction from './components/ItemListContainer'

function App () {
    return (
        <div className="App">
            <NavBar/>
            <ItemFunction Texto="Esta sera un componente de lista"/>
        </div>
    );
}

export default App;
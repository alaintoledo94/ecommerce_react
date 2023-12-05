import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {





  return (
    <div style={{width: '100vw', height: '100vh'}}>
    <NavBarComponent/>
    <ItemListContainer greeting="Bienvenido a mi tienda"/>
    </div>
  )
}

export default App

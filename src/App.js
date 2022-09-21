
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarInicio from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer.js/itemListContainer';


// despues lo saco de aca y lo pongo en navbar.js

function App() {
  return (
    <div className="App">
      <NavbarInicio/>
      <ItemListContainer greeting={'Productos'}/>
    </div>
  );
}

export default App;


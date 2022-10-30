
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarInicio from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer.js/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart/Cart';
import Home from './pages/Home/Home';
import Nosotras from './pages/Nosotras/Nosotras';
import Checkout from './components/Checkout/Checkout'

function App() {
  return (
    <div className="App">
      <CartContextProvider>

<BrowserRouter>
  
      <NavbarInicio/>
      <Routes>
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/nosotras' element={<Nosotras/>}/>
        <Route path='/Inicio' element={<Home/>}/>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element = {<Cart/>}></Route>
        <Route path='*' element={<h1>ME QUIERO IR A TWISTED WONDERLAND O AL GENSHIN</h1>}/>
      </Routes>

      </BrowserRouter>

      </CartContextProvider>
  
    </div>
  );
}

export default App;



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarInicio from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer.js/itemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Counter from './components/Counter/Counter';
// import Title from './components/Title/Title';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarInicio/>
      <Routes>
        <Route path='/productos' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Counter>
        <Title title='Sabanas'/>
      </Counter>
      <Counter>
        <Title title='Manteles'/>
      </Counter> */}
      
    </div>
  );
}

export default App;



import { Header } from './componentes/Header/Header'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

return (
   <BrowserRouter>


   <div>
      <Header/>

      <Routes>
         <Route path='/' element={ <ItemListContainer/> }/>
         <Route path='/Producto/:categoryId' element={ <ItemListContainer/> }/>
         <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
      </Routes>
   </div>


   </BrowserRouter>
)
}

export default App

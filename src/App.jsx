
import { Header } from './componentes/Header/Header'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import { Index } from './componentes/Index/Index'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexto/CartContext';
import { Footer } from './componentes/Footer/Footer'
import  CartViewContainer  from './componentes/CartViewContainer/CartViewContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

return (
   <CartProvider>
      <BrowserRouter>


<div>
   <Header/>

   <Routes>
      <Route path='/' element={ <Index/> }/>
      <Route path='/Producto/:categoryId' element={ <ItemListContainer/> }/>
      <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
      <Route path="/cart" element={ <CartViewContainer /> }/>
   </Routes>

   <Footer/>
</div>


</BrowserRouter>
   </CartProvider>
)
}

export default App

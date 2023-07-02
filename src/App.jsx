import { useState } from 'react'
import { Header } from './componentes/Header/Header'
import { Dueños } from './componentes/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

return (
   <div>
      <Header/>
      <Dueños/>
   </div>
)
}

export default App

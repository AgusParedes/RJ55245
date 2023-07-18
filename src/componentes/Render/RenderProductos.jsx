import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PedirDatos } from '../../helpers/PedirDatos'
import ItemList from '../ItemList/ItemList'


export const RenderProductos = () =>{
   
   const [Ropa, setRopa] = useState ([])
   const [Cargando, setCargando] = useState(true)

   const { categoryId } = useParams()
   console.log(categoryId)

   useEffect(()=>{
      setCargando(true)
      PedirDatos()
      .then(r => {if (categoryId) {
         setRopa( r.filter(prod => prod.category === categoryId) )
      } else {
         setRopa(r)
      }
      })
      .catch(e => console.log(e))
      .finally(()=>{
         setCargando(false)
      })})

   
   return(
         <div>
            <ItemList productos={Ropa}/>
         </div>
   )
}
export default RenderProductos
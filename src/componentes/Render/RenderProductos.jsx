import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PedirDatos } from '../../helpers/PedirDatos'
import ItemList from '../ItemList/ItemList'
import { CargandoItem } from '../CargandoItem/CargandoItem'

export const RenderProductos = () => {
const [Ropa, setRopa] = useState([])
const [Cargando, setCargando] = useState(true)

const { categoryId } = useParams()
console.log(categoryId)

useEffect(() => {
   setCargando(true)

   PedirDatos()
      .then(r => {
         if (categoryId) {
            const productosFiltrados = r.filter(prod => prod.category === categoryId)
            setRopa(productosFiltrados)
         } else {
            setRopa(r)
         }
      })
      .catch(e => console.log(e))
      .finally(() => {
         setCargando(false)
      })
}, [categoryId])

return (
   <div>
      {
         Cargando
            ? <CargandoItem />
            : <ItemList productos={Ropa} />
      }
   </div>
)
}

export default RenderProductos

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { CargandoItem } from '../CargandoItem/CargandoItem'
import { collection, getDocs, query, where } from 'firebase/firestore'  
import { db } from '../../firebase/config'


export const RenderProductos = () => {
const [Ropa, setRopa] = useState([])
const [Cargando, setCargando] = useState(true)

const { categoryId } = useParams()
console.log(categoryId)

useEffect(() => {
   setCargando(true)

   const productosRef = collection(db, "productos")
   const q = query(productosRef, where('category', '==', categoryId))

   getDocs(q)
   .then((resp) => {
      const docs = resp.docs.map((doc) => {
         return{
            id: doc.id,
            ...doc.data()
         }
      })
      setRopa(docs)
      console.log(docs)
   })
   .catch(e => console.log(e))
   .finally(() => setCargando(false))

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

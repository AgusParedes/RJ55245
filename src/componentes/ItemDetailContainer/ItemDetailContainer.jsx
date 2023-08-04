import { useEffect, useState } from "react"
import { PedirDatos } from "../../helpers/PedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { CargandoItem } from '../CargandoItem/CargandoItem'
import { doc, getDoc } from "firebase/firestore"
import './ItemDetail.scss'
import { db } from "../../firebase/config"



export const ItemDetailContainer = () => {
   const [item, setItem] = useState(null)
   const [Cargando, setCargando] = useState(true)


   const { itemId } = useParams()
   
   useEffect(() => {
      setCargando(true)
      const itemRef = doc(db, "productos", itemId)

      getDoc(itemRef)
      .then((doc) => {
         setItem({
            id: doc.id,
            ...doc.data()
         })
      })
      .catch(e => console.log(e))
      .finally(() => setCargando(false))

   }, [])

   return (
      <div>
            {
               Cargando
                  ? <CargandoItem/>
                  :  <div className="div_container">
                     <ItemDetail item={item}/>
                     </div>
            }
      </div>
   )
}

export default ItemDetailContainer
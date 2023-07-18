import { useEffect, useState } from "react"
import { PedirDatos } from "../../helpers/PedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetail.scss'



export const ItemDetailContainer = () => {
   const [item, setItem] = useState(null)
   const [Cargando, setCargando] = useState(true)

   const { itemId } = useParams()
   
   useEffect(() => {
      setCargando(true)

      PedirDatos()
            .then(r => {
               setItem( r.find(prod => prod.id === Number(itemId)) )
            })
            .finally(() => setCargando(false))
   }, [])

   return (
      <div>
            {
               Cargando
                  ? <h2>Cargando...</h2>
                  :  <div className="div_container">
                     <ItemDetail item={item}/>
                     </div>
            }
      </div>
   )
}

export default ItemDetailContainer
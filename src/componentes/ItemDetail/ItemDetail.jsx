import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../../contexto/CartContext"
import { Link } from 'react-router-dom'

export const itemDetail = ({item}) =>{
   const { agregarAlCarrito, isInCart } = useContext(CartContext)
   console.log(isInCart(item.id))

   const [cantidad, setCantidad] = useState(1)

   const handleAgregar = () => {
      const newItem = {
            ...item,
            cantidad
      }
      agregarAlCarrito(newItem)
   }


   return(
      <div className='div_detail_container'>
         <div className='div_izq'>
            <div className='div_img'>
               <img src={item.img} alt="" />
            </div>
         </div>
         <div className='div_der'>
            <div className='datos_container'>
               <div className="div_arriba"><h4>{item.titulo}</h4></div>
               <div className="divisor"></div>
               <div className="div_medio">
                  <h5>${item.precio}</h5>
                  <p className="item_descripcion">"{item.descripcion}"</p>
               </div>

               {
               isInCart(item.id)
                  ? <div className="div_botonCarrito_detail"><Link className="botonCarrito_detail" to="/cart">Ir al carrito</Link></div>
                  : <ItemCount 
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                     />
               }
               
            </div>
         </div>
      </div>
   )
}
export default itemDetail
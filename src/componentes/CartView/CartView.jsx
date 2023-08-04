import { useContext } from "react"
import { CartContext } from "../../contexto/CartContext"
import trash_icon from "../../../public/trash_icon.png"

export const CartView = ({item}) => {
   const { borrarDelCarrito } = useContext(CartContext)
   return (
      
      <div className='col-md-3 mb-3 d-flex justify-content-center' key={item.id}>
      <div className='tarjeta_container'>
         <div className='div_img_producto'>
            <img src={item.img} alt={item.titulo} className='producto_img pantalones_img' />
         </div>  
         <div className='datos_producto'>
            <p className='titulo_producto'>{item.titulo}</p>
            <p className='precio_producto'>${item.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
         </div>
         <div className='boton_producto'> 
            <button onClick={() => borrarDelCarrito(item.id)} className="boton_borrar"><img src={trash_icon} alt="" className="trash_icon"/></button>
         </div>
      </div>
   </div>
   )
}

export default CartView
import { useContext } from "react"
import { CartContext } from "../../contexto/CartContext"
import { Link } from "react-router-dom"
import CartView from "../CartView/CartView"
import "../CartView/CartView.scss"

const CartViewContainer = () => {
   const { cart, totalCompra, vaciarCarrito,} = useContext(CartContext)

   if (cart.length === 0) {
      return (
            <div className="container div_cartContainer">
               <h2>Tu carrito está vacío</h2>
               <hr/>
               <Link to="/" className="boton_volverAlInicio_detail">Volver al Inicio</Link>
            </div>
      )
   }

   return (
      <div className="container div_cartContainer">
            <h2>Tu compra</h2>
            <hr/>
            <div className="div_productos_container">
               {
                  cart.map((item) => (
                     <CartView item={item}/>
                  ))
               }
            </div>
            <div>
               <h4>Total: ${totalCompra()}</h4>
               <button onClick={vaciarCarrito} className="boton_borrar">Vaciar Carrito</button>
               <Link to="/checkout" className="boton_terminar_compra">Terminar Compra</Link>
            </div>            
      </div>
   )
}

export default CartViewContainer
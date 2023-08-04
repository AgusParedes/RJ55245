import icono_compra from '../../assets/icono_compra.png'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../contexto/CartContext'

import './CartWidget.scss'
export const CarritoImg = () => {
   const { totalCantidad } = useContext(CartContext)

   return(
      <Link to="/cart" className='cursor-pointer cart_container'>
         <img src={icono_compra} alt="" className='icono_compra' />
         <span className='numero_carrito'>{totalCantidad ()}</span>
      </Link>
   )
}
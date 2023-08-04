import { createContext, useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) => {
   const [cart, setCart] = useState([])
   console.log(cart)
   const agregarAlCarrito = (item) => {
      setCart([...cart, item])
   }

   const isInCart = (id) => {
      return cart.some((item) => item.id === id)
   }

   const borrarDelCarrito = (id) => {
      setCart( cart.filter((item) => item.id !== id) )
   } 

   const vaciarCarrito = () => {
      setCart([])
   }

   const totalCompra = () => {
        return cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
   }

   const totalCantidad = () => {
      return cart.reduce((acc, item) => acc + item.cantidad, 0)
   }

   return (
      <CartContext.Provider value={{
            cart,
            agregarAlCarrito,
            isInCart,
            borrarDelCarrito,
            vaciarCarrito,
            totalCompra,
            totalCantidad
      }}>
            {children}
      </CartContext.Provider>
   )
}
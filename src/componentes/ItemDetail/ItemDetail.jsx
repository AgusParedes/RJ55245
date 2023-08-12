import { useContext, useState } from "react"
import { CartContext } from "../../contexto/CartContext"
import { Link } from 'react-router-dom'
import ItemCount_Zapatillas from "../ItemCount_Zapatillas/ItemCount_Zapatillas"
import ItemCount_Ropa from "../itemCount_Ropa/itemCount_Ropa"

export const itemDetail = ({item}) =>{
   const { agregarAlCarrito, isInCart } = useContext(CartContext)
   console.log(isInCart(item.id))

   const [cantidad, setCantidad] = useState(1)
   const [talle, setTalle] = useState(38)
   const [talleIndex, setTalleIndex] = useState(1)
   const maxTalle = 46

   const handleAgregar = () => {
      const newItem = {
            ...item,
            cantidad,
            talle,
            talleIndex
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
                  item.stock === 0
                  ?  <div className="div_detail_noHayStock">
                        <p>No hay stock :(</p>
                        <Link to="/" className="boton_volver" >Volver</Link>
                     </div>
                  
                  : 
                  isInCart(item.id)
                  ? <div className="div_botonCarrito_detail"><Link className="botonCarrito_detail" to="/cart">Ir al carrito</Link></div>
                  : 
                  item.category === "Zapatilla"
                  ? <ItemCount_Zapatillas
                        maxCantidad={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        maxTalle={maxTalle}
                        talle={talle}
                        setTalle={setTalle}
                        agregar={handleAgregar}
                     />
                  : item.category === "Pantalon"||item.category ==="Remera"||item.category ==="Campera-Buzo"
                  ? <ItemCount_Ropa
                        maxCantidad={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        talleIndex={talleIndex}
                        setTalleIndex={setTalleIndex}
                        agregar={handleAgregar}
                     />
                  : null
               }
               
            </div>
         </div>
      </div>
   )
}
export default itemDetail
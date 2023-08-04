const ItemCount = ({max, cantidad, setCantidad, agregar}) => {
   const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
   }

   const handleSumar = () => {
      cantidad < max && setCantidad(cantidad + 1)
   }

   return (
      <div className="div_abajo">
         <button onClick={handleRestar} className="boton_count">-</button>
         <span className="mx-2">{cantidad}</span>
         <button onClick={handleSumar} className="boton_count">+</button>
         <br/>
         <div className="div_boton">
            <button onClick={agregar} className="boton_comprar">Agregar</button>
         </div>
      </div>
   )
}

export default ItemCount
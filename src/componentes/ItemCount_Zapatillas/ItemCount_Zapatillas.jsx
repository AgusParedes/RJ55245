const ItemCount_Zapatillas = ({maxCantidad, cantidad, setCantidad, maxTalle, talle, setTalle, agregar}) => {
   const handleRestarCantidad = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
   }

   const handleSumarCantidad = () => {
      cantidad < maxCantidad && setCantidad(cantidad + 1)
   }

   const handleRestarTalle = () => {
      talle > 38 && setTalle(talle - 1)
   }

   const handleSumarTalle = () => {
      talle < maxTalle && setTalle(talle + 1)
   }

   return (
      <div className="div_abajo">
         <div className="div_counters">
            <div>
               <p>Cantidad</p>
               <button onClick={handleRestarCantidad} className="boton_count">-</button>
               <span className="mx-2">{cantidad}</span>
               <button onClick={handleSumarCantidad} className="boton_count">+</button>
            </div>
            <div>
               <p>Talle</p>
               <button onClick={handleRestarTalle} className="boton_count">-</button>
               <span className="mx-2">{talle}</span>
               <button onClick={handleSumarTalle} className="boton_count">+</button>
            </div>
         </div>
         
         <br/>
         <div className="div_boton">
            <button onClick={agregar} className="boton_comprar">Agregar</button>
         </div>
      </div>
   )
}

export default ItemCount_Zapatillas
const tallasDisponibles = ["XS", "S", "M", "L", "XL"];

const ItemCount_Ropa = ({ maxCantidad, cantidad, setCantidad, talleIndex, setTalleIndex, agregar }) => {
   const handleRestarCantidad = () => {
      cantidad > 1 && setCantidad(cantidad - 1);
   }

   const handleSumarCantidad = () => {
      cantidad < maxCantidad && setCantidad(cantidad + 1);
   }

   const handleCambiarTalle = (increment) => {
      const newIndex = talleIndex + increment;
      if (newIndex >= 0 && newIndex < tallasDisponibles.length) {
         setTalleIndex(newIndex);
      }
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
               <button onClick={() => handleCambiarTalle(-1)} className="boton_count">-</button>
               <span className="mx-2">{tallasDisponibles[talleIndex]}</span>
               <button onClick={() => handleCambiarTalle(1)} className="boton_count">+</button>
            </div>
         </div>
         
         <br/>
         <div className="div_boton">
            <button onClick={agregar} className="boton_comprar">Agregar</button>
         </div>
      </div>
   );
}

export default ItemCount_Ropa
import ItemCard from "../ItemCard/ItemCard"
import './TarjetaProducto.scss'



const ItemList = ({productos}) => {

   return (
         
         <div className="div_productos_container">
            {
               productos.map((prod) => <div className='col-md-3 mb-3 d-flex justify-content-center'>
                                          <ItemCard key={prod.id} item={prod}/>
                                       </div>)
            }
         </div>
   )
}

export default ItemList
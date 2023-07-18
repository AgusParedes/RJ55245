import { Link } from "react-router-dom"


const RopaItemCard = ({item}) => {

   return (
            <div className='col-md-3 mb-3 d-flex justify-content-center'>
               <div className='tarjeta_container'>
                  <div className='div_img_producto'>
                     <img src={item.img} alt={item.titulo} className='producto_img pantalones_img' />
                  </div>
                  <div className='datos_producto'>
                     <p className='titulo_producto'>{item.titulo}</p>
                     <p className='precio_producto'>{item.precio}</p>
                  </div>
                  <div className='boton_producto'>
                     <Link to={`/detail/${item.id}`} className='boton_comprar'>COMPRAR</Link>
                  </div>
               </div>
            </div>
   )
}

export default RopaItemCard
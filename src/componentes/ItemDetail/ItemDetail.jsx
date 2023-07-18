

export const itemDetail = ({item}) =>{
   return(
      <div className='div_detail_container'>
         <div className='div_izq'>
            <div className='div_img'>
               <img src={item.img} alt="" />
            </div>
         </div>
         <div className='div_der'>
            <div className='datos_container'>
               <h3>{item.titulo}</h3>
               <h4>{item.precio}</h4>
               <div className="div_button">
                  <button>Comprar</button>
               </div>
            </div>
         </div>
      </div>
   )
}
export default itemDetail
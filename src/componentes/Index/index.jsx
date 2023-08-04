import './Index.scss'
import { CargandoItem } from '../CargandoItem/CargandoItem'
import React, { useEffect, useState } from 'react';
import { collection, getDocs,} from 'firebase/firestore'  
import { db } from '../../firebase/config'
import ItemCard from "../ItemCard/ItemCard"

export const Index = () =>{

   const [productos, setProductos] = useState([]);
   const [Cargando, setCargando] = useState(true);

   useEffect(() => {
      setCargando(true)
   
      const productosRef = collection(db, "productos")
   
      getDocs(productosRef)
      .then((resp) => {
         const docs = resp.docs.map((doc) => {
            return{
               id: doc.id,
               ...doc.data()
            }
         })
         setProductos(docs)
         console.log(docs)
      })
      .catch(e => console.log(e))
      .finally(() => setCargando(false))
   
   },[])

      const obtenerConjunto = (Conjunto) => {
         return productos.filter((producto) => producto.conjunto === Conjunto).slice(0, 3);
      };
   
   return(
      <>
         {
               Cargando
                  ? <CargandoItem/>
                  :  <div>
                        <div className='publicidad_container'>
                           <div className="div_img_publiciad"><img src="/public/index_photo1.png" alt="" /></div>
                           <div className="div_img_publiciad"><img src="/public/index_photo3.png" alt="" /></div>
                           <div className="div_img_publiciad"><img src="/public/index_photo2.png" alt="" /></div>
                        </div>
                        <div className="div_conjuntos_container">
                           <h2>CONJUNTOS</h2>
                           <div className='divisor'></div>
                           <div className='titulos_conjuntos'><img src="/public/BlueOcean.png" alt="" /></div>
                           <div className='conjunto_BlueOcean'>
                              {obtenerConjunto('Blue Ocean').map((producto) => (
                              <div className="col-md-3 mb-3 d-flex justify-content-center" key={producto.id}>
                                 <ItemCard item={producto} />
                              </div>))}
                           </div>
                           <div className='titulos_conjuntos'><img src="/public/PurpleNight.png" alt="" /></div>
                           <div className='conjunto_PurpleNight'>
                              {obtenerConjunto('Purple Night').map((producto) => (
                              <div className="col-md-3 mb-3 d-flex justify-content-center" key={producto.id}>
                                 <ItemCard item={producto} />
                              </div>))}
                           </div>
                           <div className='titulos_conjuntos'><img src="/public/BrownLight.png" alt="" /></div>
                           <div className='conjunto_BrownLight'>
                              {obtenerConjunto('Brown Light').map((producto) => (
                              <div className="col-md-3 mb-3 d-flex justify-content-center" key={producto.id}>
                                 <ItemCard item={producto} />
                              </div>))}
                           </div>
                        </div>
                        <div className='sobreNosotros_container'>
                           <div className='div_sobreNostros_izq'>
                              <h1>SOBRE LUIMINA</h1>
                              <span>Somos dos jóvenes apasionados por la moda y la autenticidad. Nuestra aventura comenzó con el deseo de compartir nuestra pasión con el mundo, y así nació "Lumina". Nuestra colección incluye una amplia variedad de prendas de moda para todas las edades y gustos. Desde zapatillas deportivas de marcas reconocidas hasta elegantes pantalones y remeras de diseñadores contemporáneos.</span>
                           </div>
                           <div className='div_sobreNostros_der'>
                              <img src="/public/logo_gif.gif" alt="" />
                           </div>
                        </div>
                        </div>
            }
      </>
      
      
   )
}
export default Index
import { useContext, useState } from "react"
import { CartContext } from "../../contexto/CartContext"
import { collection, addDoc, getDoc, updateDoc, writeBatch, where, query, documentId, getDocs } from 'firebase/firestore'
import { db } from "../../firebase/config"
import "./Checkout.scss"
import { Link, Navigate } from "react-router-dom"

const Checkout = () => {

   const {cart, totalCompra, vaciarCarrito} = useContext(CartContext)
   const [orderId, setOrderId] = useState(null)
   const [values, setValues] = useState({
      nombre:'',
      apellido:'',
      email:'',
      codPostal:'',
      direccion:'',
      provincia:''
   })

   const handleInputChange = (e) => {
      setValues({
         ...values,
         [e.target.name]:e.target.value
      })
   }
   const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(values)

      const order = {
         cliente: values,
         items: cart.map(item => {
         const orderItem = {
            id: item.id,
            precio: item.precio,
            titulo: item.titulo,
            cantidad: item.cantidad,
            talle: item.talle
         };
            if (item.category === "Zapatilla") {
            return orderItem;
            } else if ( item.category === "Pantalon" || item.category === "Remera" || item.category === "Campera-Buzo") {
            return {
               ...orderItem,
               talle: item.talleIndex
            };
            }
         })
      };
      
      console.log(order);

   const batch = writeBatch(db)
   const orderRef = collection(db, "orders")
   const productosRef = collection(db, "productos")
   const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))


   const productos = await getDocs(q)
   const outOfStock = []

   productos.docs.forEach((doc) => {
      const item = cart.find(prod => prod.id === doc.id)
      const stock = doc.data().stock
      if (stock >= item.cantidad){
         batch.update(doc.ref, {
            stock:stock - item.cantidad
         })
      } else {
         outOfStock.push(item)
      }
   })
   
   if (outOfStock.length === 0) {
      await batch.commit()
      const doc = await addDoc(orderRef, order)

      vaciarCarrito()
      setOrderId(doc.id)
   } else {
      alert("no hay stock")
   }
   }
   const allFieldsFilled = Object.values(values).every((value) => value !== "");

   if(orderId){
      return(
         <div className="checkout_continer">
            <div className="checkout_enviado">
               <div className="div_checkoutEnviado_img"><img src="/public/icono_confirmado.png" alt="" /></div>
               <div className="div_checkoutEnviado_text">
                  <p>La compra se registro correctamente!!</p>
                  <hr />
                  <p>Tu numero de orden es: <strong>{orderId}</strong></p>
                  <Link to = "/" className="boton_volver_checkout">Volver</Link>
               </div>
            </div>
         </div>
      )
   }

   if (cart.length === 0) {
      return <Navigate to="/"/>
   }


   return (
      <div className="checkout_continer">
         <div className="checkout_datos_continer">
            <div className="div_img_checkout"><img src="/public/logo_lumina_sinFondo.png" alt="" /></div>
            <form onSubmit={handleSubmit}>
            <div>
               <p>Nombre</p>
               <input
               onChange={handleInputChange}
               value={values.nombre} 
               type="text"
               placeholder="Nombre"
               className="checkout_inputs"
               name="nombre"
               required/>
            </div>
            <div>
               <p>Apellidos</p>
               <input 
               onChange={handleInputChange}
               value={values.apellido} 
               type="text"
               placeholder="Apellidos"
               className="checkout_inputs"
               name="apellido"
               required/>
            </div>
            <div>
               <p>Email</p>
               <input
               onChange={handleInputChange}
               value={values.email}  
               type="email"
               placeholder="Email"
               className="checkout_inputs"
               name="email"
               required/>
            </div>
            <div className="div_container_inputDirecciones">
               <div className="checkout_div_codpostal">
                  <p>Cod.Postal</p>
                  <input
                  onChange={handleInputChange}
                  value={values.codPostal}  
                  type="text"
                  placeholder="Cod.Postal"
                  name="codPostal"
                  required/>
               </div>

               <div className="checkout_div_ubicacion">
                  <p>Direccion</p>
                  <input 
                  onChange={handleInputChange}
                  value={values.direccion} 
                  type="text"
                  placeholder="Direccion"
                  name="direccion"
                  required/>
                  
               </div>

               <div className="checkout_div_ubicacion">
                  <p>Provincia</p>
                  <select placeholder="Provincia" value={values.provincia} name="provincia" onChange={handleInputChange} required >
                     <option disabled >Provincia</option>
                     <option value="Buenos Aires">Buenos Aires</option>
                     <option value="Catamarca">Catamarca</option>
                     <option value="Chaco">Chaco</option>
                     <option value="Chubut">Chubut</option>
                     <option value="Córdoba">Córdoba</option>
                     <option value="Corrientes">Corrientes</option>
                     <option value="Entre Ríos">Entre Ríos</option>
                     <option value="Formosa">Formosa</option>
                     <option value="Jujuy">Jujuy</option>
                     <option value="La Pampa">La Pampa</option>
                     <option value="La Rioja">La Rioja</option>
                     <option value="Mendoza">Mendoza</option>
                     <option value="Misiones">Misiones</option>
                     <option value="Neuquén">Neuquén</option>
                     <option value="Río Negro">Río Negro</option>
                     <option value="Salta">Salta</option>
                     <option value="San Juan">San Juan</option>
                     <option value="San Luis">San Luis</option>
                     <option value="Santa Cruz">Santa Cruz</option>
                     <option value="Santa Fe">Santa Fe</option>
                     <option value="Santiago del Estero">Santiago del Estero</option>
                     <option value="Tierra del Fuego">Tierra del Fuego</option>
                     <option value="Tucumán">Tucumán</option>
                  </select>
               </div>
            </div>
            <div className="div_boton_checkout">
               <button type="submit" className="boton_enviar_checkout" disabled={!allFieldsFilled}>Enviar</button>
            </div>
            </form>
         </div>
      </div>
   )
   }

export default Checkout
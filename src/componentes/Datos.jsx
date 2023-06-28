export const Datos = ({nombre, puesto, aporte}) =>{
   
   return(
      <li>
         <h2>{nombre}</h2>
         <p>Puesto:{puesto}</p>
         <p>Aporte:${aporte}</p>
      </li>
   )
}
export default Datos
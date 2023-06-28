import { Datos } from './Datos'
export const Dueños = () =>{
   
   return(
      <div>
         <h2>Dueños</h2>
         <ul>
            <Datos nombre="Agustin Paredes" puesto="Presidente" aporte={200000}/>
            <Datos nombre="Sofia Lupis" puesto="Presidente" aporte={180000}/>
            <Datos nombre="Evangelina Oggier" puesto="VicePresidente" aporte={90000}/>
         </ul>
         </div>
      
   )
}
export default Dueños
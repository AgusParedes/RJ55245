import './CargandoItem.scss'
import Logo_Lumina from '../../assets/logo_lumina.png'

export const CargandoItem = () => {
   return(
      <div className='div_cargando_container'>
         <div className='div_img_container'><img src={ Logo_Lumina } alt="Logo Lumina" className='logo_cargando'/></div>
         <p>CARGANDO...</p>
      </div>
   )
}
export default CargandoItem
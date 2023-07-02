import Logo_Lumina from '../../assets/logo_lumina.png'
import icono_compra from '../../assets/icono_compra.png'
import './Header.scss'


let numero_carrito = 0


export const Header = () =>{
   
      return(
         <header className='header'>
            <div className='header__container'>
               <img src={Logo_Lumina} alt="Logo" className='Logo_lumina'/>
               <nav className='NavBar'>
                  <a href="#">INICIO</a>
                  <a href="#">ROPA</a>
                  <a href="#">ZAPATILLAS</a>
                  <a href="#">SOBRE NOSOTROS</a>
                  <div>
                     <img src={icono_compra} alt="Icono_Compra" className='icono_compra'/>
                     <span className='numero_carrito'>{numero_carrito}</span>
                  </div>
               </nav>
            </div>
         </header>
      )
}
export default Header
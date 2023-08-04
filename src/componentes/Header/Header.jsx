import Logo_Lumina from '../../assets/logo_lumina.png'
import { CarritoImg } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './Header.scss'



export const Header = () =>{
   
      return(
         <header className='header'>
            <div className='header__container'>
               <img src={Logo_Lumina} alt="Logo" className='Logo_lumina'/>
               <nav className='NavBar'>
                  <Link to="/" className='nav_pages'>INICIO</Link>
                  <Link to="/Producto/Campera-Buzo" className='nav_pages'>CAMPERAS</Link>
                  <Link to="/Producto/Remera" className='nav_pages'>REMERAS</Link>
                  <Link to="/Producto/Pantalon" className='nav_pages'>PANTALONES</Link>
                  <Link to="/Producto/Zapatilla" className='nav_pages'>ZAPATILLAS</Link>
                  <div>
                     <CarritoImg/>
                  </div>
               </nav>
            </div>
         </header>
      )
}
export default Header
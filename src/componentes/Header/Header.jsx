import Logo_Lumina from '../../assets/logo_lumina.png'
import { CarritoImg } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import './Header.scss'


let numero_carrito = 0


export const Header = () =>{
   
      return(
         <header className='header'>
            <div className='header__container'>
               <img src={Logo_Lumina} alt="Logo" className='Logo_lumina'/>
               <nav className='NavBar'>
                  <Link to="/">INICIO</Link>
                  <Link to="/Producto/Campera">CAMPERAS</Link>
                  <Link to="/Producto/Remera">REMERAS</Link>
                  <Link to="/Producto/Pantalon">PANTALONES</Link>
                  <Link to="/Producto/Zapatilla">ZAPATILLAS</Link>
                  <div>
                     <CarritoImg/>
                     <span className='numero_carrito'>{numero_carrito}</span>
                  </div>
               </nav>
            </div>
         </header>
      )
}
export default Header
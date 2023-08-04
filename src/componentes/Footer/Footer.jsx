
import './Footer.scss'



export const Footer = () =>{
   
      return(
         <footer className='footer_container'>
            <div className='footer_datos'>
                  <span>Contact: LuminaStyle@gmail.com</span>
                  <span>+34040239203</span>
               <div className='iconos_footer'>
                  <a className="fa-brands fa-twitter"></a>
                  <a className="fa-brands fa-facebook"></a>
                  <a className='fa-brands fa-instagram'></a>
               </div>
            </div>
         </footer>
      )
}
export default Footer
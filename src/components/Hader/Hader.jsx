import { useState } from 'react'; //con esto validamos que el estado de nuestra acccion en este caso boton sea activo o inactivo
import './Hader.css';
import foto from '../../assets/foto.png'; //manera diferente de importar la imagen

const links =[{
   item:'Personajes',
   href : '/Personajes',
},
{
   item : 'Capitulos',
   href : '/Capitulos',
},
{
   item : 'ConVida',
   href : '/ConVida',
},
{
   item : 'Fallecidos',
   href : '/Fallecidos',
}]
const Hader=()=>{
   // en la linea de abajo es donde validamos y evaluamos nuestro UseState
   const [menu, setMenu] = useState (false)
   const toogleMenu =() =>{
      setMenu( !menu) //en estas 3 lineas es donde estamos evaluando el estado del boton
   }
   return (
      links.map(x => (
         <link to={x.href}> {x.item}</link>
      )),
      <header className='Hader'> 
        
         <button className='Hader-button' onClick={toogleMenu}>
         <svg className='Hader-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
 
         </button>
         {/* usaremos el hook usestate mediante un booleano */}
         <nav className={`Hader-nav ${menu ? 'isActive' : ''}`}>
            <ul className='Hader-ul'>
               <li className="Hader-li"><a href="" className="Hader-a">Personajes</a></li>
               <li className="Hader-li"><a href="" className="Hader-a">Capitulos</a></li>
               <li className="Hader-li"><a href="" className="Hader-a">Con vida</a></li>
               <li className="Hader-li"><a href="" className="Hader-a">Fallecidos</a></li>
               

               
            </ul>
           

         </nav>
         <h1 className='Hader-h1'>
            <a href="#" className='Hader-a'>
               <img className='logo' src= {foto} alt="foto" /> 
               {/* aqui es donde usamos la imagen que importamos */}
            </a>
         </h1>
      </header>
   )
   
}
export default Hader
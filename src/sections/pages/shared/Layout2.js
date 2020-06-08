import React,{Fragment,useState} from 'react';
import {Link, Router, withRouter} from 'react-router-dom'
import Logo from '../../../images/Logo.png'


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


  const Navbar2 = ({children,match,history,router}) => {
    
    const isActive = path => {
        if(match.path === path) {
            return {color:'#EE46B8'}
        } else{
            return {color:'#EE46B8'}
        }
    };
    

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);;
    }
    return (
      
        <div className="navbar navbar-expand-lg navbar-dark " color="light" >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
        {/* <div className='nav-color' class="nav-link" to='/'>
             <img alt='logo' width='180px' height='80px' src={Logo}/>
         </div> */}
     
       <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
         {/* <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
           <li class="nav-item active">
               <Link to="/" className="nav-link my-2 my-lg-0" style={{color:'#EE46B8'}} >
             REGRESAR A HOME
               </Link>       
           </li>
         </ul> */}
         <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
           <li class="nav-item active">
               <a href="/" className="nav-link my-2 my-lg-0" style={{color:'#EE46B8'}} >
             REGRESAR A HOME
               </a>       
           </li>
         </ul>
         {/* <form className="nav-link my-2 my-lg-0">
         <Link to='/' className="nav-link my-2 my-lg-0" >
               HOME
         </Link>
         </form> */}
            <div className='fusion nav-color' class="nav-link" to='/'>
             <img alt='logo' width='180px' height='80px' src={Logo}/>
         </div>
       </div>
             </div>
    )
  }

  export default withRouter(Navbar2)
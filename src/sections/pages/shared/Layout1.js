import React,{Fragment,useState} from 'react';
import {Router, withRouter} from 'react-router-dom'
import Logo from '../../../images/Logo.png'
import { Link,Element ,animateScroll as scroll } from "react-scroll";



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


  const Navbar1 = ({children,match,history,router}) => {
    
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
        // <div>
        //      <Navbar light expand="md" color="light"  className=''>
        //      <NavItem style={{cursor:'pointer'}}>
        //               <Link to='/' >
        //                <img src={Logo} alt='Logo'  width='180px' height='80px'/>
        //               </Link>
        //     </NavItem>
        //         <Link href="/">
        //         <NavLink style={isActive('/')} >HOME</NavLink>
        //         </Link>
        //         <Link href="/">
        //         <NavLink style={isActive('/')} >GALERIA</NavLink>
        //         </Link>
        //         <NavbarToggler onClick={toggle} />
        //         <Collapse isOpen={isOpen} navbar>
        //           <Nav className="ml-auto" navbar>

                  
        //             <NavItem style={{cursor:'pointer'}}>
        //               <Link to='/' >
        //                <img src={Logo} alt='Logo'  width='180px' height='80px'/>
        //               </Link>
        //             </NavItem>
             
                    
                      
        //                  <NavItem  style={{cursor:'pointer'}}>
        //                  <Link to="/quince">
        //                    <NavLink>
                       
        //                    </NavLink>
        //                  </Link>
        //              </NavItem> 
        //              {/* <div className='fusion nav-color' class="nav-link" to='/'>
        //                  <img alt='logo' width='180px' height='80px' src={Logo}/>
        //             </div> */}
                   
                 
                  
        //             {/* {JSON.stringify(isAuth())} */}
                   
                  
        //                 <NavItem  style={{cursor:'pointer'}}>
        //                 <Link href="/user">
        //                   <NavLink>
                        
        //                    </NavLink>
        //                 </Link>
        //               </NavItem>
              

        //               <NavItem>
        //                 <NavLink >
                       
        //                 </NavLink>
        //           </NavItem>
                  
                  
            
                    
        //             <UncontrolledDropdown nav inNavbar>
        //               {/* <DropdownToggle nav caret>
        //                 Options
        //               </DropdownToggle>
        //               <DropdownMenu right>
        //                 <DropdownItem>
        //                   Option 1
        //                 </DropdownItem>
        //                 <DropdownItem>
        //                   Option 2
        //                 </DropdownItem>
        //                 <DropdownItem divider />
        //                 <DropdownItem>
        //                   Reset
        //                 </DropdownItem>
        //               </DropdownMenu> */}
        //             </UncontrolledDropdown>
        //           </Nav>
        //           {/* <NavbarText>Simple Text</NavbarText> */}
        //         </Collapse>
        //       </Navbar>
        // </div>
        <div className="navbar navbar-expand-lg navbar-dark " color="light" >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
        {/* <div className='nav-color' class="nav-link" to='/'>
             <img alt='logo' width='180px' height='80px' src={Logo}/>
         </div> */}
     
       <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
         <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
         {/* <li class="nav-item active">
               <Link to='/' className="spacer" style={isActive('/')} >
               spacer
               </Link>       
           </li>
           <li class="nav-item active">
               <Link to='/' className="nav-link my-2 my-lg-0" style={isActive('/')} >
               HOME
               </Link>       
           </li>
           <li class="nav-item active">
               <Link
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500} 
                to='bio'
                className="nav-link my-2 my-lg-0" 
                // style={{cursor:'pointer'}}
                style={isActive('/')} >
                BIO
               </Link>       
           </li>
          
           <li class="nav-item active">
               <Link 
               activeClass="active"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500} 
                to='videos'      
               className="nav-link my-2 my-lg-0" style={isActive('/')} >           
               VIDEOS
               </Link>       
           </li>
           <li class="nav-item active">
               <Link 
               activeClass="active"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500} 
                to='musica'
                className="nav-link my-2 my-lg-0" 
               style={isActive('/')} >
             ALBUMES/MÚSICA
               </Link>       
           </li>
           <li class="nav-item active">
               <a href='/gallery' className="nav-link my-2 my-lg-0" style={isActive('/')} >
              GALERIA
               </a>       
           </li> */}
         </ul>
         {/* <ul class="nav navbar-nav mx-auto">
         <li class="nav-item">
            <Link
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500} 
                to='bio'
                className="nav-link my-2 my-lg-0" 
                // style={{cursor:'pointer'}}
                style={isActive('/')} >
                BIO
               </Link>  
              
            </li>
            <li class="nav-item">
            <Link 
               activeClass="active"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500} 
                to='videos'      
               className="nav-link my-2 my-lg-0" style={isActive('/')} >           
               VIDEOS
               </Link>   
            </li>
            <li class="nav-item"><Link 
               activeClass="active"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500} 
                to='musica'
                className="nav-link my-2 my-lg-0" 
               style={isActive('/')} >
             ALBUMES/MÚSICA
               </Link>
            </li>
            <li class="nav-item">
              <a href='/gallery' 
              className="nav-link my-2 my-lg-0"
              style={isActive('/')} >
            GALERIA
               </a>  
            
            </li>
         
        </ul> */}
        <ul class="nav navbar-nav mx-auto">
          <li class="nav-item">
           <Link
               activeClass="active"
               to="about"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500} 
                to='bio'
                className="nav-link my-2 my-lg-0" 
                // style={{cursor:'pointer'}}
                style={isActive('/')} >
                BIO
               </Link>  
             </li>  
          </ul>
         <ul class="nav navbar-nav mx-auto">
         <li class="nav-item">
             <Link 
               activeClass="active"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500} 
                to='videos'      
               className="nav-link my-2 my-lg-0" style={isActive('/')} >           
               VIDEOS
               </Link> 
           </li>      
        </ul>
         <ul class="nav navbar-nav mx-auto">
          <li class="nav-item"><Link 
               activeClass="active"
               spy={true}
               smooth={true}
               offset={-70}
               duration={500} 
                to='musica'
                className="nav-link my-2 my-lg-0" 
               style={isActive('/')} >
             ALBUMES/MÚSICA
               </Link>
            </li>
        </ul>
         <ul class="nav navbar-nav mx-auto">
             <li class="nav-item">
              <a href='/galeria' 
              className="nav-link my-2 my-lg-0"
              style={isActive('/')} >
            GALERIA
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

  export default withRouter(Navbar1)
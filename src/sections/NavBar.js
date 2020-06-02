import React,{Fragment} from 'react';
import {Link, Router, withRouter} from 'react-router-dom'
import '../styles/home.scss';
import Logo from '../../src/images/Logo.png'

const NavBar = ({children,match,history,router}) => {

    
const isActive = path => {
    if(match.path === path) {
        return {color:'#EE46B8'}
    } else{
        return {color:'#fff'}
    }
};

    const nav = () => (
        
        <div className="navbar navbar-expand-lg navbar-dark bg-dark ">
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
   {/* <div className='nav-color' class="nav-link" to='/'>
        <img alt='logo' width='180px' height='80px' src={Logo}/>
    </div> */}

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
          <Link to='/' className="nav-link my-2 my-lg-0" style={isActive('/')} >
          HOME
          </Link>       
      </li>
      <li class="nav-item active">
          <Link to='/highlights' className="nav-link my-2 my-lg-0" style={isActive('/')} >
          HIGHLIGHT
          </Link>       
      </li>
      <li class="nav-item active">
          <Link to='/highlights' className="nav-link my-2 my-lg-0" style={isActive('/')} >
          HIGHLIGHT
          </Link>       
      </li>
      <li class="nav-item active">
          <Link to='/albums' className="nav-link my-2 my-lg-0" style={isActive('/')} >
          ALBUMES/MÚSICA
          </Link>       
      </li>
      <li class="nav-item active">
          <Link to='/videos' className="nav-link my-2 my-lg-0" style={isActive('/')} >
          VIDEOS
          </Link>       
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
    



    return (
        <Fragment>
            {nav()}
            <div className="container">
                {children}
            </div>
        </Fragment>
    )
}

export default withRouter(NavBar)
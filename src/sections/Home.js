import React,{Fragment} from 'react';

import Logo from '../images/Logo.png'




const Home = () => {
  return (
    <Fragment>
    <header>
      <div className='header-logo'>
        <img className='img img-fluid'
         style={{maxHeight:''}} 
         src={Logo} alt="Logo-principal"/>
      </div>
    </header>
    <div>
      <p className="titulo-naranja-neon texto-regular">
        Lost fusion
      </p>
    </div>
  </Fragment>
  )
  
}

export default Home;

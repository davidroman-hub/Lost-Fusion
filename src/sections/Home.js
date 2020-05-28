import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';
import serpiente from './serpiente.mp3'
import Logo from '../images/Logo.png'
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import {audioList1} from './audioList'

import NavBar from './NavBar'
//Music Reproductor functions
//https://github.com/lijinke666/react-music-player/blob/master/example/example.js

const Home = () => {
 

const options = { 
  audioLists: audioList1,
  remove: false,
  showDownload: false,
}



return (
  <Fragment>
{/* <NavBar/> */}
  {/* HEADER */}
 
<header className="header-content "  id="header-content">
     
 
            {/* <div className="figure text-center"/>     */}
       
            <br/>
            <img className='Logo2' 
             height="200px"
             width="400px"
           // style={{maxHeight:''}} 
            src={Logo}
            alt='Header Logo'
         />
         
   
</header>

     {/* ABOUT */}

 <div>
   
           <div className="desc container text-center">
          <br/>
          <br/>
          <br/>
                    <span className='animation'>Lost Fusión</span> es un proyecto musical independiente que surge de la <span className='animation'>CDMX</span>, han logrado mezclar y conectar bastos panoramas musicales dando como resultado el sonido propio y fresco que los 
                       caracteriza con su estilo único <span className="animation">"Urban Latin Beat".</span>
                      <br/>
                      <br/> 
                       La amplia gama de sonidos que surgen de sus instrumentos han electrizado desde CDMX, Mazunte, Jalisco, Toluca, Puerto Vallarta, Edo. De México, hasta Michoacán, Puebla, Veracruz y próximamente 
                       Sudamérica y Europa; con orgullo siempre poniendo en alto el nombre de México. 
                      <br/>
                      <br/> 
                       Precursores del <span className='animation'>sonido ecléctico</span> que los caracteriza, han logrado conectar con un público extenso gracias a los géneros y ambientes que aborda su música, desde el Rock, Funk, Reggae, 
                       Disco, Hip Hop, hasta un sonido más urbano y latino, dando como resultado una experiencia musical variada para todos los gustos y frescura que incita a bailar a todo aquel que los escucha. 
                       <br/>
                       <br/> 
                       <span className='animation' style={{fontSize:'30px'}}>Lost Fusión</span> <span style={{fontSize:'30px'}} >es:</span>
                       <br/>
                       <br/> 
                         • MAYRA GARCÍA - Voz y Teclado 
                         <br/>
                         • <span>INDIRA VALDELAMAR </span>- Voz y Guitarra 
                         <br/>
                         • MIGUEL OVIEDO - Voz y Percusión 
                         <br/>
                         • ALBERTO PERALTA - Bajo 
                         <br/>
                         • MARCO FIGUEROA - Batería 
                         <br/>
                         <br/>
                         <span className='grey1'>Los cinco músicos indican cuando comienza la fusión</span> 
                         <ReactJkMusicPlayer {...options} />
                   </div>

                   <div className='band-1 text-center'>
         <img className='img img-fluid'
          style={{maxHeight:''}} 
          src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590638872/lost%20Fusion/foto2-removebg-preview_yaqcwb.png'
          alt='band-1'
          />
          </div>
</div> 

  {/* GITHUB SECTION */}

  <div className="prensa">
     <div className='prensa1'>
       <img className='img img-fluid'
        style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630752/lost%20Fusion/02_er5hap.png'
        alt='prensa1'
       />
     </div>
     <div className="prensa1">
      <h2 className="titles-desc">
       
      </h2>
     </div>
     <div className='prensa1'>
       <img className='img img-fluid'
         style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630749/lost%20Fusion/03_j4jzke.png'
         alt='prensa2'
        />
      </div>
     </div>
    

    {/* SKILLS */}

<div className="services" id='skills'>
        <br/>
        <h4 className='text-center mb-4'>FRAMEWORKS AND PLATFORMS SKILLS</h4> 
        <div className='figure2'/>
        <div className="Hobbies-icon">
            <p className='H-icons'>
              <i className="frame fab fa-react"></i>
                <h5 className="text-center">React</h5>
            </p>
            <p className='H-icons'>
              <i className="frame fab fa-node-js"></i>
              <h5 className="text-center">Node JS</h5>
            </p>
           
            <p className='H-icons'>
              <i className="frame fab fa-digital-ocean ml-4"></i>
              <h5 className="text-center">Digital Ocean</h5>
            </p>
            <p className='H-icons '>
              <i className="frame fab fa-aws"></i>
              <h5 className="text-center">Amazon Web S.</h5>
            </p> 
            <p className='H-icons'>
              <i className="frame fab fa-sass"></i>
              <h5 className="text-center">Sass</h5>
            </p>
            <br/>
        
        </div>
</div> 


{/* PORTFOLIO */}


<div className="portfolio" id='projects'>
<hr/>
<h4 className="text-center">PROJECTS</h4> 
<div className='figure2'/>
<div className="Hobbies-icon">       
<div className='container-card'>
   <div className="card">
      <img src='' alt='/'/>
              <h6 className="mb-1 mt-2">Restaurant Mar y sol</h6>
              <div className="figure2"/>
               <p className="description-t mb-2">E-commerce MERN App, using Bootstrap 4, React JS , MongoDB, Express , Node JS, Sass , Google auth & Sendgrid service. Hosting on Digital Ocean.</p>
                <a href="http://134.122.119.185/" target='_blank' rel='noopener noreferrer' >Read more</a>
    </div>
</div>

<div className='container-card'>
   <div className="card">
      <img src='' alt='/' />
      <h6 className="mb-1 mt-2">Roger & Paq</h6>
              <div className="figure2"/>
              <p className="description-t mb-2">E-commerce MERN App, using Bootstrap 4, React JS , MongoDB, Express , Node JS, Sass & BRAINTREE service. Hosting on Digital Ocean.</p>
                <a href="http://68.183.135.73/shop" target='_blank' rel='noopener noreferrer'>Read more</a>
    </div>
</div>

<div className='container-card'>
   <div className="card">
      <img src='' alt='/' />
      <h6 className="mb-1 mt-2">Ultimate Auth</h6>
              <div className="figure2"/>
              <p className="description-t mb-1">MERN-application for login , with account activation using sendgrid, google, facebook,Bootstrap 4, React JS , MongoDB, Express , Node JS & Sass. </p>
                <a href="http://206.189.227.84/" target='_blank' rel='noopener noreferrer'>Read more</a>
    </div>
</div>
<div className='container-card'>
   <div className="card">
      <img src='' alt='/' />
      <h6 className="mb-1 mt-2">Simple E-commerce</h6>
              <div className="figure2"/>
              <p className="description-t mb-1">E-commerce MERN App, using Bootstrap 4, React JS , MongoDB, Express , Node JS, Sass & BRAINTREE service. </p>
                <a href="https://github.com/davidroman-hub/ecommerce-front" target='_blank' rel='noopener noreferrer'>Read more</a>
    </div>
</div>
<div className='container-card'>
   <div className="card">
      <img src='' alt='/' />
      <h6 className="mb-1 mt-2">My Personal page</h6>
              <div className="figure2"/>
              <p className="description-t mb-5">A React JS App using Bootstrap 4, Sass, Netlify and Node Js  </p>
                <a href="https://github.com/davidroman-hub/Real-portafolio" target='_blank' rel='noopener noreferrer'>Read more</a>
    </div>
</div>

<div className='container-card'>
   <div className="card">
      <img src='' alt='/' />
      <h6 className="mb-1 mt-2">Contemporary Artist Blog</h6>
              <div className="figure2"/>
              <p className="description-t mb-5">A React JS App using Sass & Netlify</p>
                <a href="https://romantic-sammet-63ec69.netlify.app/" target='_blank' rel='noopener noreferrer'>Read more</a>
    </div>
</div>
</div>
</div>        

    {/* RESUME */}

<div className="resume">
<br/>
<h4 className="info5 text-center">WOULD YOU LIKE TO CHECK OUT MY RESUME?</h4>
<div className="figure"/>
<div className="spacer3"/>

</div>


  {/* Contact */}

<div >
         <div id='contact'></div>
     </div>
   
    <div className="info">
         Get in touch with me!
    </div>
    <div className='figure2 mb-5'/>
    <div className="font-figures">
      
         <div className="mailes">
            <i class="fas fa-envelope-open">
     
               {/* <p className="text-p">Jobroman83@gmail.com</p> */}
              <a  className='mail' href="mailto:jobroman83@gmail.com">Jobroman83@gmail.com</a>
              <br/>
             
              </i>
         </div>
         
            <i class="fas fa-phone mt-4 ml-5">
             
              <p className="text-p">+33 7 87 42 20 67 FR <br/>
              +52 55 18 52 64 12 MX
              </p>
             
              <br/>
             
              </i>
         
         {/* <i class="fab fa-whatsapp-square">
              <p>Phone</p>
              <p className="text-p">+33 7 87 42 20 67 (only calls- France)</p>
       
           </i> */}

     </div> 


</Fragment>
)




  // return (
  //   <Fragment>
  //   <header className='header-content'>
  //     <div className='header-photo'>
  //       {/* <img className='img img-fluid'
  //        style={{maxHeight:''}} 
  //        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630526/lost%20Fusion/01_kijq3s.png' alt="Logo-principal"/> */}
  //     </div>
  //     </header>

  //     <main>
  //     <div className='header-logo'>
  //       <img className=''
  //        style={{maxHeight:''}} 
  //        src={Logo}
  //        alt='Header Logo'
  //        />
  //     </div>
  //     <div className='figure text-center'/>
      
  //     <div className='text-center'>
  //       <br/>
  //      <ReactJkMusicPlayer {...options} />

  //     </div>
  //     {/* <p className="titulo-naranja-neon texto-regular text-center">
  //       Official
  //     </p> */}
      
      
  //         <div className="desc container text-center">
          
  //           <span className='animation'>Lost Fusión</span> es un proyecto musical independiente que surge de la <span className='animation'>CDMX</span>, han logrado mezclar y conectar bastos panoramas musicales dando como resultado el sonido propio y fresco que los 
  //             caracteriza con su estilo único <span className="animation">"Urban Latin Beat".</span>
  //             <br/>
  //             <br/> 
  //             La amplia gama de sonidos que surgen de sus instrumentos han electrizado desde CDMX, Mazunte, Jalisco, Toluca, Puerto Vallarta, Edo. De México, hasta Michoacán, Puebla, Veracruz y próximamente 
  //             Sudamérica y Europa; con orgullo siempre poniendo en alto el nombre de México. 
  //             <br/>
  //             <br/> 
  //             Precursores del <span className='animation'>sonido ecléctico</span> que los caracteriza, han logrado conectar con un público extenso gracias a los géneros y ambientes que aborda su música, desde el Rock, Funk, Reggae, 
  //             Disco, Hip Hop, hasta un sonido más urbano y latino, dando como resultado una experiencia musical variada para todos los gustos y frescura que incita a bailar a todo aquel que los escucha. 
  //             <br/>
  //             <br/> 
  //               <span className='animation' style={{fontSize:'30px'}}>Lost Fusión</span> <span style={{fontSize:'30px'}} >es:</span>
  //             <br/>
  //             <br/> 
  //               • MAYRA GARCÍA - Voz y Teclado 
  //               <br/>
  //               • <span>INDIRA VALDELAMAR </span>- Voz y Guitarra 
  //               <br/>
  //               • MIGUEL OVIEDO - Voz y Percusión 
  //               <br/>
  //               • ALBERTO PERALTA - Bajo 
  //               <br/>
  //               • MARCO FIGUEROA - Batería 
  //               <br/>
  //               <br/>
  //               <span className='grey1'>Los cinco músicos indican cuando comienza la fusión</span> 
  //         </div>
  //     </main>
  //     <div className='band-1'>
  //       <img className='img img-fluid'
  //        style={{maxHeight:''}} 
  //        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590638872/lost%20Fusion/foto2-removebg-preview_yaqcwb.png'
  //        alt='band-1'
  //        />
  //     </div>
  //     <div className="prensa">
  //     <div className='prensa1'>
  //       <img className='img img-fluid'
  //        style={{maxHeight:''}} 
  //        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630752/lost%20Fusion/02_er5hap.png'
  //        alt='prensa1'
  //        />
  //     </div>
  //     <div className='prensa1'>
  //       <img className='img img-fluid'
  //        style={{maxHeight:''}} 
  //        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630749/lost%20Fusion/03_j4jzke.png'
  //        alt='prensa2'
  //        />
  //     </div>
  //     </div>
  //         <h1> cualquier cosa</h1>
    
  
  // </Fragment>
  // )
  
}

export default Home;

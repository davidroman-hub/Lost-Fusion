import React,{Fragment} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import serpiente from './serpiente.mp3'
import Logo from '../images/Logo.png'
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import {audioList1} from './audioList'

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
    <header className='header-content'>
      <div className='header-photo'>
        {/* <img className='img img-fluid'
         style={{maxHeight:''}} 
         src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630526/lost%20Fusion/01_kijq3s.png' alt="Logo-principal"/> */}
      </div>
      </header>

      <main>
      <div className='header-logo'>
        <img className='img img-fluid'
         style={{maxHeight:''}} 
         src={Logo}
         alt='Header Logo'
         />
      </div>
      <div className='figure text-center'/>
      
      <div className='text-center'>
        <br/>
       <ReactJkMusicPlayer {...options} />

      </div>
      {/* <p className="titulo-naranja-neon texto-regular text-center">
        Official
      </p> */}
      
      
          <div className="desc container text-center">
          
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
          </div>
      </main>
      <div className='band-1'>
        <img className='img img-fluid'
         style={{maxHeight:''}} 
         src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590638872/lost%20Fusion/foto2-removebg-preview_yaqcwb.png'
         alt='band-1'
         />
      </div>
      <div className="prensa">
      <div className='prensa1'>
        <img className='img img-fluid'
         style={{maxHeight:''}} 
         src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630752/lost%20Fusion/02_er5hap.png'
         alt='prensa1'
         />
      </div>
      <div className='prensa1'>
        <img className='img img-fluid'
         style={{maxHeight:''}} 
         src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630749/lost%20Fusion/03_j4jzke.png'
         alt='prensa2'
         />
      </div>
      </div>
          <h1> cualquier cosa</h1>
    
  
  </Fragment>
  )
  
}

export default Home;

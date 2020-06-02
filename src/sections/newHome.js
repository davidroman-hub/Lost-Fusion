import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';
//import serpiente from './serpiente.mp3'
import Logo from '../images/Logo.png'
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import {audioList1} from './audioList'
import MusicLinks from './MusicLinks'
import Contact from './Contact-us'

const newHome = () => {
    const options = { 
        audioLists: audioList1,
        remove: false,
        showDownload: false,
      }
    
    return (
        <Fragment>
      
      <header className="header-content "  id="header-content">
            <div className="header-text">   
                 <p className='Logo1'>      
                
                </p>      
            </div>
        
        </header>
        <div className='band-4 text-center'>
         <img className='img img-fluid'
          style={{maxHeight:''}} 
          src={Logo}
          alt='band-1'
          />
          </div>
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
                       <span className='animation'>El sonido eléctrico</span> que los caracteriza, han logrado conectar con un público extenso gracias a los géneros y ambientes que aborda su música, desde el Rock, Funk, Reggae, 
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
                         {/* <ReactJkMusicPlayer {...options} /> */}
                   </div>

                   <div className='band-1 text-center'>
         <img className='img img-fluid'
          style={{maxHeight:''}} 
          src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590638872/lost%20Fusion/foto2-removebg-preview_yaqcwb.png'
          alt='band-1'
          />
          </div>
          <div className='titles-descPr text-center'> PRESENTACIONES </div>
            <div className="prensa">
                  <div className='prensa1'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590864116/lost%20Fusion/radi_ugoebk.png'
                      alt='prensa1'
                    />
                    <br/>
                    <div className="desc container text-center">
                    <span style={{fontSize:'12px'}}  className='animation-l'>Concierto para el programa "Intersecciones" 
                      CDMX 2018 </span>
                    </div>
                  </div>
              

                  
                  <div className='prensa1'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590863938/lost%20Fusion/once_jqpwec.png'
                      alt='prensa2'
                      />
                      <br/>
                    <div className="desc container text-center">
                    <span style={{fontSize:'12px'}}  className='animation-l'> Presentación para el programa "Calle Once" 
                    CDMX 2019 </span>
                    </div>
                    </div>
     </div>

     <div className="prensa">
                  <div className='prensa1 mb-4'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590864152/lost%20Fusion/jazz_wkloej.png'
                      alt='prensa1'
                    />
                    <br/>
                    <div className="desc container text-center">
                    <span style={{fontSize:'12px'}}  className='animation-l'> Festival Internacional de Jazz de Mazunte 
                      Mazunte, Oaxaca 2019 
                      </span>
                    </div>
                  </div>
              

                  
                  <div className='prensa1'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590863967/lost%20Fusion/fiji_z9jr6t.png'
                      alt='prensa2'
                      />
                      <br/>
                    <div className="desc container text-center">
                    <span style={{fontSize:'12px'}}  className='animation-l'> Feria Internacional del Libro Infantil y Juvenil 
                    CDMX 2019 
                    </span>
                    </div>
                    </div>
     </div>
     <div className="prensa">
                  <div className='prensa1 mb-5'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590868772/lost%20Fusion/barranca_fjicq3.png'
                      alt='prensa1'
                    />
                    <br/>
                    <div className="desc container text-center">
                    <span style={{fontSize:'12px'}}  className='animation-l'>Festival Barranca Fest Uruapan, Michoacán 2019 </span>
                    </div>
                  </div>
              

                  
                  <div className='prensa1'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590863938/lost%20Fusion/5may_ilguce.png'
                      alt='prensa2'
                      />
                      <br/>
                      
                    <div className="desc container text-center">
                    <span style={{fontSize:'12px'}}  className='animation-l'>Festival Internacional Cinco de Mayo 
                      Puebla 
                      2018 </span>
                    </div>
                    </div>
     </div>
     <div className="prensa">
                  <div className='prensa1 mb-5'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590869058/lost%20Fusion/coyo_xxw1eh.png'
                      alt='prensa1'
                    />
                    <br/>
                    <div className="desc container text-center">
                    <span style={{fontSize:'12px'}}  className='animation-l'>Coyote Sounds Party Salón Los Ángeles, CDMX 2018 </span>
                    </div>
                  </div>
              

                  
                  <div className='prensa1'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590869063/lost%20Fusion/alfe_xmpl6u.png'
                      alt='prensa2'
                      />
                      <br/>
                      
                    <div className="desc container text-center">
                    <span style={{fontSize:'12px'}}  className='animation-l'>
                    Festival Cultural del Alfeñique 
                    Toluca 2018 
                    </span>
                    </div>
                    </div>
     </div>
     <div className="prensa">
                  <div className='prensa1'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590869186/lost%20Fusion/art_mrks9t.png'
                      alt='prensa1'
                    />
                    <br/>
                    <div className="desc container text-center">
                    <span style={{fontSize:'12px'}} className='animation-l'>Festival Arte y Raíces Cuautitlán, Edo Méx.2019 
                    </span>
                    </div>
                  </div>
              

                  
                  <div className='prensa1'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590863938/lost%20Fusion/fiest_cfs6uh.png'
                      alt='prensa2'
                      />
                      <br/>
                      
                    <div className="desc container text-center">
                    <span style={{fontSize:'12px'}} className='animation-l'>Fiesta de la Música, Embajada Francesa 
                    CDMX 2018 </span>
                    </div>
                    </div>
                   </div>
                <br/>
                <br/>
                <div className="albums">
                  <div className='group'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630767/lost%20Fusion/12_cbqdyz.png'
                      alt='prensa1'
                    />
                    <br/>
                  </div>
              
     </div>
     <div className="photos">
                  <div className='group'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src={Logo}
                      alt='prensa1'
                    />
                    <br/>
                  </div>
              
     </div>


     {/* CONTACTO */}
     <div className='titles-descPr text-center '> CONTACTO:</div>
      <Contact/>
      <div className='mailes'>
          <a  className='mail text-center' style={{fontSize:'20px', color:'white'}} href="mailto:contacto.lostfusion@gmail.com">contacto.lostfusion@gmail.com</a>
      </div>
      

      <div className='mailes'>
          <div  className='mail text-center' style={{fontSize:'20px', color:'white'}}>Tel: +52-55-74-12-76-94</div>
      </div>
       
        </Fragment>


    )
}

export default newHome
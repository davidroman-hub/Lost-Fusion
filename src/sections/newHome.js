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
import Header from './pages/shared/Header'
import ReactFBLike from 'react-fb-like';
import MusicPlayer from 'react-responsive-music-player';



const newHome = () => {


  
    const options = { 
        audioLists: audioList1,
        remove: false,
        showDownload: false,
        responsive: false,
        mode: 'full',
        //toggleMode: false,
      }
    
      const playlist = [
        {
          url: 'https://res.cloudinary.com/dm8dxwvix/video/upload/v1590609528/Lost_Fusi%C3%B3n_-_Serpiente_Video_Oficial_cw063t.mp3',
          cover: 'https://res.cloudinary.com/dm8dxwvix/image/upload/v1590610036/deltingoaltango_b5e1em.png',
          title: 'Despacito',
          artist: [
            'Luis Fonsi',
            'Daddy Yankee'
          ]
        },
        {
          url: 'path/to/mp3',
          cover: 'path/to/jpg',
          title: 'Bedtime Stories',
          artist: [
            'Jay Chou'
          ]
        }
      ]

      const homeContainer = () => (
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
       {/* <div className='titles-descPr text-center '> CONTACTO:</div>
        <Contact/> */}
        <div className='mailes'>
           {/* <a  className='mail text-center' style={{fontSize:'20px', color:'white'}} href="mailto:contacto.lostfusion@gmail.com">contacto.lostfusion@gmail.com</a> */}
        </div>
        
  
        <div className='mailes'>
            {/* <div  className='mail text-center' style={{fontSize:'20px', color:'white'}}>Tel: +52-55-74-12-76-94</div> */}
        </div>
        <div>
        <div className="g-ytsubscribe" data-channelid="UCRHNmMDXY8N0i3C8Pp9M-nA" data-layout="default" data-count="default"/>
        </div>
            <div class="fb-like" data-href="https://www.facebook.com/lostfusion/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-share="true"/>
                <div className="facebook-but">
                < ReactFBLike language="es_ES" appId={process.env.FB_APP_ID} version="v2.12" />
          </div> 
          {/* <MusicPlayer playlist={playlist} /> */}
        {/* <ReactJkMusicPlayer {...options} /> */}
          </Fragment>
      )


    return (
       <Header>
      
         {homeContainer()}
       </Header>
    )
}

export default newHome
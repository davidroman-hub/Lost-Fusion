import React,{Fragment} from 'react';
//import {Link} from 'react-router-dom'
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
import ReactPlayer from 'react-player'
import MusicPlayer from 'react-responsive-music-player';
import './pages/Videos.scss'
import ImageGallery from 'react-image-gallery';
import VideoCarousel from './videoCarousel'

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
          url: 'https://res.cloudinary.com/dm8dxwvix/video/upload/v1590610006/Lost_Fusi%C3%B3n_-_Guajira_Audio_Oficial_ojeiiv.mp3',
          cover: 'https://res.cloudinary.com/dm8dxwvix/image/upload/v1590610036/deltingoaltango_b5e1em.png',
          title: 'Serpiente',
          artist: [
            'Lost-Fusión',
            '-Guajira-'
          ]
        },
        {
          url: 'https://res.cloudinary.com/dm8dxwvix/video/upload/v1591231402/lost%20Fusion/lost-fusion-costa-linda-lyric-video_smqknm.mp3',
          cover: 'https://res.cloudinary.com/dm8dxwvix/image/upload/v1591232149/lost%20Fusion/costa_vvbglw.png',
          title: 'Costalinda',
          artist: [
            'Lost-Fusión',
            '-Costa Linda-'
          ]
        },
        {
          url: 'https://res.cloudinary.com/dm8dxwvix/video/upload/v1591231676/lost%20Fusion/lost-fusion-el-camino-del-guerrero-en-vivo-radio-unam_qw4mxd.mp3',
          cover: 'https://res.cloudinary.com/dm8dxwvix/image/upload/v1591232149/lost%20Fusion/unam_uqj5zi.png',
          title: 'Camino',
          artist: [
            'Lost-Fusión',
            '-El Camino del guerrero (En Vivo) -'
          ]
        },
        {
          url: 'https://res.cloudinary.com/dm8dxwvix/video/upload/v1591231985/lost%20Fusion/lost-fusion-cuando-bailas-en-vivo-radio-unam_vryt8o.mp3',
          cover: 'https://res.cloudinary.com/dm8dxwvix/image/upload/v1591232149/lost%20Fusion/unam_uqj5zi.png',
          title: 'cuando bailas',
          artist: [
            'Lost-Fusión',
            '-Cuando Bailas (En Vivo)-'
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

        {/* BIOGRAFIA */}

        <div className=" text-center" id="bio">
         <h2 className="titles-desc">
         BIO
         </h2>
        </div>
          <br/>
         
        <div className="biografia">
              <div>
              <img className='bio-img img img-fluid '
                  style={{maxHeight:''}} 
                  src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1591393548/lost%20Fusion/Lost_Grupal_PNG_hcbvdj.png'
                  alt='band-1'
            />
               
              </div>

            
              <div className="desc container text-center">
                
                <span className='animation' style={{fontSize:'20px'}}>Lost Fusión</span> es un proyecto musical<br/> 
                independiente
                que surge de la <span className='animation' style={{fontSize:'20px'}}>CDMX</span>, 
                <br/> han logrado 
                 mezclar y conectar bastos<br/> panoramas
                 musicales como el <span className='animation' style={{fontSize:'20px'}}>rock,
                funk,<br/> reggae,
                 hasta un sonido más urbano y latino</span>;<br/>
                 dando como resultado el sonido propio <br/>
                 que los caracteriza con su estilo único<br/> 
                “Urban Latin Beat”.<span className='animation' style={{fontSize:'20px'}}> El amor, la libertad<br/> 
                y el folklore </span>
                son las banderas en cada<br/> una de sus presentaciones,
                poniendo al <br/> 
                público en una <span className='animation' style={{fontSize:'20px'}}> misma sintonía</span>, 
                haciéndolos<br/> vibrar juntos en cada nota y con mucha energía.
                
                {/* <span className='animation' style={{fontSize:'20px'}}>Lost Fusión</span> es un proyecto musical de Urban Latin Beat que surge de la <span className='animation'>CDMX</span>, con el sonido eléctrico que los caracteriza,
                 han logrado conectar con un público extenso gracias a los géneros y ambientes que aborda su música, desde el  <span className='animation' style={{fontSize:'20px'}}> Rock, Funk, Reggae, Rap, Soul, 
                 hasta un sonido más urbano y latino </span>, dando como resultado una experiencia musical que ha recorrido desde CDMX, Mazunte, Jalisco, Toluca, Puerto Vallarta,
                  Edo. De México, hasta Michoacán, Puebla, Veracruz y próximamente Sudamérica y Europa; con orgullo siempre poniendo en alto el nombre de México.
                  <span className='animation' style={{fontSize:'20px'}}> Música variada</span> y fresca que incita a bailar a todo aquel que los escucha. */}
                <br/>
                <br/> 
              {/* Con <span className='animation'>el sonido eléctrico</span> que los caracteriza, han logrado conectar con un público extenso gracias a los géneros y ambientes que aborda su música, desde el Rock, Funk, Reggae, 
              Rap, Soul, hasta un sonido más urbano y latino, dando como resultado una experiencia musical variada para todos los gustos y frescura que incita a bailar a todo aquel que los escucha.  */}
               <br/>
                     
                    {/* <ReactJkMusicPlayer {...options} /> */}
                 </div>
              </div>
      
               <br/>
               <br/> 

            <div className="desc container text-center">
         
          
                         <span className='animation' style={{fontSize:'30px'}}>Lost Fusión</span> <span style={{fontSize:'30px'}} >es:</span>
                         <br/>
                         <br/> 
                           • MAYRA FIGUEROA - Voz y Teclado 
                           <br/>
                           • <span>INDIRA VALDELAMAR </span>- Voz y Guitarra 
                           <br/>
                           • MIGUEL OVIEDO - Voz y Percusión 
                           <br/>
                           • ALBERTO PERALTA - Bajo 
                           <br/>
                           • MARCO PALOMO - Batería 
                           <br/>
                           <br/>
                           {/* <span className='grey1'>Los cinco músicos indican cuando comienza la fusión</span>  */}
                           {/* <ReactJkMusicPlayer {...options} /> */}
                     </div>
  

          {/* VIDEOS */}
         

            <br/>
            <br/>
                    <div className='titles-descPrV text-center' id='videos'> VIDEOS </div>
        
            <div className="videos">
                 <VideoCarousel/>
            </div>
              
            <br/>
            <br/>     
               
              {/* MUSICA */}

              <div className='titles-descPrR text-center' id='musica'> MÚSICA </div>

              <div className='reproductor text-center'>
                  {/* <div className='reproduce1'>
                     <MusicPlayer playlist={playlist} 
                    // mode="vertical" 
                     />
                     
                     </div> */}

                     <div className='reproduce2'>
                     <MusicPlayer playlist={playlist} 
                     mode="vertical" 
                     />
                     
                     </div>
                  </div>
                  

            
                  <br/>
                  <br/>

                <div className='musica 1'> >
                  <div className='albums-photo'>
                  <a href="https://open.spotify.com/album/0vnjMPHORQBkvS96uVPGpJ"  target='_blank' rel='noopener noreferrer'> 
                  <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630766/lost%20Fusion/13_zsspdn.png'
                      alt='Tingo al tango'
                    /></a>
                    <br/>
                    <span className='animation-l'>1.-</span> Tropas
                    <br/> 
                    <span className='animation-l'>2.-</span> Cuando Bailas 
                    <br/>
                    <span className='animation-l'>3.-</span> El Camino del Guerrero
                    <br/>
                    <span className='animation-l'>4.-</span> Seducción a un Elefante 
                    <br/>
                    <span className='animation-l'>5.-</span> Guajira 
                    <br/>
                    <span className='animation-l'> 6.- </span> Hechizo 
                    <br/>
                    <span className='animation-l'>7.- </span> Liberación 
                    <br/>
                    <span className='animation-l'>8.-</span> Del Tingo Al Tango 
                  </div>
                <div className='albums-photo'>
                <a href="https://open.spotify.com/album/4bUlfaa0RJ4fiXBhrGfenJ"  target='_blank' rel='noopener noreferrer' >  
                  <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630764/lost%20Fusion/14_mqk9nn.png'
                      alt='prensa1'
                    /></a>
                     <br/>
                    <span className='animation-a'>1.-</span> Guajira (En vivo)
                    <br/>
                    <span className='animation-a'>2.-</span> El Camino del Guerrero (En vivo)
                    <br/>
                    <span className='animation-a'>3.-</span> Cuando Bailas (En vivo)
                    <br/>
                    <span className='animation-a'>4.-</span> Costa linda (En vivo)
                    <br/>
                    <span className='animation-a'>5.-</span> Madre Tambor (En vivo)
                    <br/>
                    <span className='animation-a'>6.-</span> Del Tingo Al Tango (En vivo)
                    <br/>
                    <span className='animation-a'>7.-</span> Liberación (En vivo)

                    </div>
                </div>
                <div className='musica'>
                  <div className='albums-photo2'>
                  
                  </div>
                </div>


          
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

          
        <div className='titles-desc text-center '> CONTACTO:</div>
        <div className='mailes'>
          <a  className='mail text-center' style={{fontSize:'18px'}} href="mailto:contacto.lostfusion@gmail.com">contacto.lostfusion@gmail.com</a>
      </div>
        <br/>
        

        {/* <Contact/> */}
   

    
        <div className='botas text-center'>
            <div className="g-ytsubscribe" data-channelid="UCRHNmMDXY8N0i3C8Pp9M-nA" data-layout="default" data-count="default"/>
                <div className="spacer-figure"/>
            <div class="fb-like" data-href="https://www.facebook.com/lostfusion/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-share="true"/>
        </div>
        <br/>
              
      
   
      

        
       
         
  
    

         {/* /// to fix the error */}
                  <div className="facebook-but">
                         < ReactFBLike language="es_ES" appId={process.env.FB_APP_ID} version="v2.12" />
                  </div>
            


          </Fragment>
      )


    return (
       <Header>
      
         {homeContainer()}
         <br/>
      
        {Contact()}
       </Header>
    )
}

export default newHome
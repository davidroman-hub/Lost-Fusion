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

  {/* PRENSA SECTION */}

  <div className="prensa">
     <div className='prensa5'>
       <img className='img img-fluid'
        style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630752/lost%20Fusion/02_er5hap.png'
        alt='prensa1'
       />
     </div>
     <div className="prensa2">
      <h2 className="titles-desc">
       PRENSA
      </h2>
     </div>
     <div className='prensa5'>
       <img className='img img-fluid'
         style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630749/lost%20Fusion/03_j4jzke.png'
         alt='prensa2'
        />
      </div>
     </div>
     <div className="desc container text-center">
          <br/>
          <br/>
          <br/> 
                      “Estos jovenes vienen directo desde Xochimilco para presentar su música con amor y locura,
                       se vale cantar, bailar y sobre todo disfrutar esta mezcla exquisita de ritmos. Comparten canciones de libertad y nos reunimos en este camino del guerrero."
                       <br/> 
                       <span className='animation'style={{fontSize:'20px'}}>Montserrat Muñoz, Radio UNAM 96.1FM </span>
                      <br/>
                      <br/> 
                      “Son jóvenes con un camino extenso por delante, son entregados y transmiten toda su energía a través de sus canciones llenas de sentimientos y texturas." 
                      <br/>
                      <span className='animation'style={{fontSize:'20px'}}> Ricardo Raphael, Canal ONCE</span> 

                      <br/>
                      <br/> 
                      "La dualidad entre sus sonidos electrónicos y acústicos crean una atmosfera ideal para percibir su música llena de tintes y emociones.
                       Verlos en vivo es la mejor forma de disfrutarlos por toda la buena energía que te transmiten." 
                       <br/>
                       <span className='animation'style={{fontSize:'20px'}}>Sofía Navarro, UAM Radio 94.1FM </span>
                       <br/>
                       <br/>  
                       
                   </div>
                   <div className='spacer2'/>
    {/* PREMIOS */}
  
    <br/>
    <br/>  
    <div className="prensa">
     <div className='triangleIm'>
       <img className=''
        style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630746/lost%20Fusion/04_panhsd.png'
        alt='prensa1'
       />
     </div>
     <div className="premios2">
      {/* <h2 className="titles-descP">
       PREMIOS
      </h2> */}
       {/* <img className='img img-fluid'
        style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630743/lost%20Fusion/05_cbcwj6.png'
        alt='prensa1'
       /> */}
     </div>
     <div className='triangleIm'>
       <img className=''
         style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630740/lost%20Fusion/06_zzodq6.png'
         alt='prensa2'
        />
      </div>
     </div>
     
     <div className="triangle">
                  <div className='triangleIm'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630743/lost%20Fusion/05_cbcwj6.png'
                      alt='prensa1'
                    />
                    <br/>
                  </div>
              
     </div>
     <div>

    <div className='titles-descP text-center'> PREMIOS </div>
    </div>

    <div className='spacer'>
      
      </div>
    
     <div className="desc container text-center">
          <br/>
          <br/>
          <br/> 
          <i class="fas fa-trophy" style={{color:'#ceb916'}}/> Ganadores del concurso  <span className='animation'>“Coyote Sounds”</span> de los “Músicos de José” (2018) 
          <br/>
          <br/>
          <i class="fas fa-trophy" style={{color:'#ceb916'}}/> Ganadores en los Premios ETV" de <span className='animation'>“EvoluciónTV” </span> en la categoría “Fusión" (2018) 
          <br/>
          <br/>
          <i class="fas fa-trophy" style={{color:'#ceb916'}}/> Ganadores del concurso  <span className='animation'>"La Música Nos Une”</span> de la delegación Tlalpan (2017) 
          <br/>
          <br/>
          <i class="fas fa-trophy" style={{color:'#ceb916'}}/> Ganadores del concurso  <span className='animation'>"El Sur Hace Ruido"</span>  de la delegación Xochimilco (2017)
          <br/>        
          <br/>                   
      </div>

     
      <div className="prensa">
     <div className='prensa1'>
       <img className='img img-fluid'
        style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630770/lost%20Fusion/10_qj9asb.png'
        alt='prensa1'
       />
     </div>
     <div className="premios2">
      {/* <h2 className="titles-descP">
       PREMIOS
      </h2> */}
      <div className='titles-descH text-center'> HIGHLIGHTS </div>
    
     </div>
     <div className='prensa1'>
       <img className='img img-fluid'
         style={{maxHeight:''}} 
        src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630776/lost%20Fusion/08_nwadem.png'
         alt='prensa2'
        />
      </div>
     </div>

     <div className="desc container text-center">
          <br/>
          <br/>
          <br/> 
                      Festival Multicultural de Globos de Cantoya tocando frente a más de 
                      <span className='animation-l'> 5,000 personas</span>, Edo. de Méx. (2015)                        
                      <br/>
                      <br/> 
                      Presentación del disco "Del Tingo Al Tango" en Sala Julián Carrillo para <span className='animation-l'>Radio UNAM</span> , con mas de 300 copias vendidas el mismo dia. (2018) 
                      <br/>
                      <br/> 
                      Teloneros en el “Coyote Sounds Party" de los <span className='animation-l'>“Músicos de José" </span> en el 
                      Salón Los Ángeles, CDMX. (2018) 
                       <br/>
                       <br/>  
                       Presentación en televisión nacional para <span className='animation-l'>Canal ONCE</span> durante el programa “Calle 11 
                       con Ricardo Raphael" (2019) 
                       <br/>
                       <br/>
                       Presentación en el Festival Internacional de Jazz de Mazunte presentandose junto con Los Músicos 
                       de José, La Ronda Bogotá y <span className='animation-l'>Rubén Albarran de Café Tacvba. </span> Muzunte, Oaxaca. (2019) 
                       <br/>
                       <br/>
                       • Presentación en la FILIJ 39 dentro del CENART, compartiendo escenario con <span className='animation-l'>Caloncho.</span> 
                      CDMX (2019) 
                      <br/>
                      <br/>
                      • Reconocimiento por el Festival Artes y Raíces en las ediciones 2016, 2017 y 2019. 
                      Compartiendo escenario con <span className='animation-l'>Chino de Los Victorios y Flor Amargo. </span> Edo. de Méx. 
                      <br/>
                      <br/>
                      • Festival Skite donde igualmente tuvo lugar las presentaciones de <span className='animation-l'> La Tremenda korte, Lengualerta, </span> Yucatán A Gogo y Heavy Nopal. CDMX (2019) 
                      <br/>
                      <br/>
                      • Teloneros de <span className='animation-l'>Tex Tex</span> en evento privado. (2018) 
                      <br/>
                      <br/>
                      • Teloneros del grupo costaricense <span className='animation-l'> Fuerza Dread </span> en el Festival Internacional Barranca del Cupatitzio. Uruapan, Michoacán. (2018) 
                      <br/>
                      <br/>
                      • Presentación en el Festival Internacional Cinco de Mayo, compartiendo cártel con <span className='animation-l'>Los Amigos Invisibles y Jarabe de Palo. </span> Puebla (2018) 
                      <br/>
                      <br/>
                     
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

             {/* ALBUMS */}

     <div className="spacerL">.</div>
     <div className='titles-descPr text-center mt-5'> ALBUM'S </div>
    

    <div className="albums">
                  <div className='prensa1 '>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630766/lost%20Fusion/13_zsspdn.png'
                      alt='prensa1'
                    />
                    <br/>
                  </div>
              
     </div>
     <div className="desc container text-center">
                    <span className='animation-l'>" Del Tingo al Tango "</span> es su primer álbum de estudio en el cual esta plasmado el sonido personal que marca una 
                    transición musical entre distintos ritmos, sonidos, emociones y líricas diversas. (2017) 
                    <br/>
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
      <div className="albums">
                  <div className='prensa1 '>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630764/lost%20Fusion/14_mqk9nn.png'
                      alt='prensa1'
                    />
                    <br/>
                  </div>
              
     </div>
     <div className="desc container text-center">

                    <span className='animation-a'>"En Vivo Radio UNAM”</span> es un disco de edición especial, 
                    grabado desde la Sala Julián Carrillo. Cuenta con sus mayores éxitos, 
                    incluye un sonido más enérgico el cual es evidencia de su proyección escenica. <span className='animation-a'>(2018)</span> 

                    <br/>
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
      <div className='titles-descPr text-center mt-5'> DISPONIBLE EN:</div>
      <MusicLinks/>


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

     <div className="albums">
                  <div className='group'>
                    <img className='img img-fluid'
                      style={{maxHeight:''}} 
                      src='https://res.cloudinary.com/dm8dxwvix/image/upload/v1590630764/lost%20Fusion/15_h26jqu.png'
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

export default Home;

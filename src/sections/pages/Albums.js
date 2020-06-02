import React,{Fragment} from 'react';
import MusicLinks from '../MusicLinks'

const Albums = () => {
    
    return (
        <Fragment>
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

        </Fragment>
    )
}

export default Albums
import React,{Fragment} from 'react';
import ReactPlayer from 'react-player'


const Videos = () => {
    
    return (
<Fragment>
  <br/>
  <br/>
<div className='titles-descPr text-center'> VIDEOS </div>
  <br/>
  <br/>
      <div className='animation text-center'>Crónicas Perdidas cap. 1</div>
  <br/>     
      <div className="videos">
          <ReactPlayer url='https://youtu.be/vsa_yncP-JI'/>
      </div>
  <br/>
  <br/>   
  <div className='animation text-center'>Lost Fusión - Serpiente (oficial) </div>
  <br/>    
      <div className="videos">
          <ReactPlayer url='https://youtu.be/RFssByTlhHM'/>
      </div>
  <br/>
  <br/>
  <div className='animation text-center'>Lost Fusión - Costa Linda (Lyric)</div>
  <br/>        
      <div className="videos">
          <ReactPlayer url='https://youtu.be/XOr6c7n4SUc'/>
      </div>
  <br/>
  <br/> 
  <div className='animation text-center'>Lost Fusión - Guajira (En Vivo Radio UNAM)</div>
  <br/>   
      <div className="videos">
          <ReactPlayer url='https://youtu.be/Ktt1sSlLq3Q'/>
      </div>   
  <br/>
  <br/> 

     
</Fragment>      
    )
}

export default Videos
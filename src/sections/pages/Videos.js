import React,{Fragment} from 'react';
import ReactPlayer from 'react-player'


const Videos = () => {
    
    return (
<Fragment>
  <br/>
  
<div className='titles-descPr text-center'> VIDEOS </div>
  <br/>
  <br/>
      <div className='animation text-center'>Crónicas Perdidas cap. 1</div>
  <br/>     
      <div className="videos">
          <ReactPlayer url='https://youtu.be/vsa_yncP-JI'/>
      </div>
 

     
</Fragment>      
    )
}

export default Videos
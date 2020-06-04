import React,{Fragment} from 'react';
import Header2 from '../../sections/pages/shared/Header2'
import ReactFBLike from 'react-fb-like';

const Gallery = () => {
    
  

    const galleryContent = () => (
      <React.Fragment>
      
          <div>
              hola soy gallery
          </div>
        {/* <div class="fb-like" data-href="https://www.facebook.com/lostfusion/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-share="true"/> */}
     
      
        

    </React.Fragment>
    )
    
    
    
    
    return (
            <Header2>
                {galleryContent()}
            </Header2>
    )
}


export default Gallery
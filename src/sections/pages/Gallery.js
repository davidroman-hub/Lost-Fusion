import React,{Fragment} from 'react';
import Header2 from '../../sections/pages/shared/Header2'
import ReactFBLike from 'react-fb-like';

const Gallery = () => {
    
  

    const galleryContent = () => (
      <React.Fragment>
          <div className="facebook-but">
                < ReactFBLike language="es_ES" appId={process.env.FB_APP_ID} version="v2.12" />
          </div>
          <div>
              hola
          </div>
        {/* <div class="fb-like" data-href="https://www.facebook.com/lostfusion/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-share="true"></div>
        <div id="fb-root"></div>
        <script async defer crossorigin="anonymous" src="https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v7.0&appId=973296126461648&autoLogAppEvents=1"></script> */}
        <div class="fb-like" data-href="https://www.facebook.com/lostfusion/" data-width="" data-layout="box_count" data-action="like" data-size="small" data-share="true"/>
     
    </React.Fragment>
    )
    
    
    
    
    return (
            <Header2>
                {galleryContent()}
            </Header2>
    )
}


export default Gallery
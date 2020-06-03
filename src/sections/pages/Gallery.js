import React,{Fragment} from 'react';
import Header2 from '../../sections/pages/shared/Header2'

const Gallery = () => {
    
    const galleryContent = () => (
        <h1>Hola soy gallery</h1>
    )
    
    
    
    return (
            <Header2>
                {galleryContent()}
            </Header2>
    )
}


export default Gallery
import React,{Fragment,useCallback, useState} from 'react';
import Header2 from './shared/Header2'
import '../../styles/home.scss'
import ImageGallery from 'react-image-gallery';
import {images2,photos} from './images'
import Gallery from 'react-photo-gallery'
import Carousel, {Modal,ModalGateway} from 'react-images'

const Videos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event,{ photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);

  };



    const galeryBody = () => {
        
        return (
            <Fragment>
                <div className='titles-descGallery text-center'> GALERIA</div>
                <br/>
                <br/>
                <ImageGallery items={images2}/>
                <br/>
                <div className="Gallery">
                        <Gallery photos = {photos} onClick = {openLightbox}/>
                        <ModalGateway>
                          {viewerIsOpen ? (
                            <Modal onClose = {closeLightbox}>
                              <Carousel
                                  currentIndex = {currentImage}
                                  views = {photos}
                                  />
                            </Modal>
                          ): null }
                        </ModalGateway>
                      </div>
                <br/>
                <br/>
              
            </Fragment>
        )
    }









    return (
        <Header2>
          {galeryBody()}
        </Header2>
    )
}

export default Videos
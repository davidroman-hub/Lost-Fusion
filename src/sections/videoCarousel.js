import React from "react";

import ImageGallery from "react-image-gallery";
import grabando from "../images/grabandomusica.png";

//const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

class videoCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: false,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: "bottom",
      showVideo: {},
    };

    this.images = [
    
      {
        thumbnail:
          "https://res.cloudinary.com/dm8dxwvix/image/upload/v1619869984/lost%20Fusion/Captura_de_Pantalla_2021-05-01_a_la_s_13.50.12_2_eblfe9.png",
        original:
          "https://res.cloudinary.com/dm8dxwvix/image/upload/v1619869984/lost%20Fusion/Captura_de_Pantalla_2021-05-01_a_la_s_13.50.12_2_eblfe9.png",
        embedUrl: "https://www.youtube.com/embed/o_gURSJeCiM",
        description: "Fuego Lento",
        renderItem: this._renderVideo.bind(this),
      },
      {
          thumbnail:
            "https://res.cloudinary.com/dm8dxwvix/image/upload/c_scale,w_795/v1619870115/lost%20Fusion/Captura_de_Pantalla_2021-05-01_a_la_s_13.54.15_2_ngx76a.png",
          original:
          "https://res.cloudinary.com/dm8dxwvix/image/upload/c_scale,w_795/v1619870115/lost%20Fusion/Captura_de_Pantalla_2021-05-01_a_la_s_13.54.15_2_ngx76a.png",
          embedUrl: "https://www.youtube.com/embed/nd1pGrTzE6Y",
          description: "Grabando musica",
          renderItem: this._renderVideo.bind(this),
        },
      {
        thumbnail:
          "https://res.cloudinary.com/dm8dxwvix/image/upload/v1591224558/lost%20Fusion/serpiente_scbnef.png",
        original:
          "https://res.cloudinary.com/dm8dxwvix/image/upload/v1591224558/lost%20Fusion/serpiente_scbnef.png",
        embedUrl: "https://www.youtube.com/embed/RFssByTlhHM",
        description: "Serpiente",
        renderItem: this._renderVideo.bind(this),
      },
      {
        thumbnail:
          "https://res.cloudinary.com/dm8dxwvix/image/upload/v1591224693/lost%20Fusion/costa_nzqiqt.png",
        original:
          "https://res.cloudinary.com/dm8dxwvix/image/upload/v1591224693/lost%20Fusion/costa_nzqiqt.png",
        embedUrl: "https://www.youtube.com/embed/XOr6c7n4SUc",
        description: "Costa Linda",
        renderItem: this._renderVideo.bind(this),
      },
   
    ].concat(this._getStaticImages());
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.slideInterval !== prevState.slideInterval ||
      this.state.slideDuration !== prevState.slideDuration
    ) {
      // refresh setInterval
      this._imageGallery.pause();
      this._imageGallery.play();
    }
  }

  _onImageClick(event) {
    console.debug(
      "clicked on image",
      event.target,
      "at index",
      this._imageGallery.getCurrentIndex()
    );
  }

  _onImageLoad(event) {
    console.debug("loaded image", event.target.src);
  }

  _onSlide(index) {
    this._resetVideo();
    console.debug("slid to index", index);
  }

  _onPause(index) {
    console.debug("paused on index", index);
  }

  _onScreenChange(fullScreenElement) {
    console.debug("isFullScreen?", !!fullScreenElement);
  }

  _onPlay(index) {
    console.debug("playing from index", index);
  }

  _handleInputChange(state, event) {
    this.setState({ [state]: event.target.value });
  }

  _handleCheckboxChange(state, event) {
    this.setState({ [state]: event.target.checked });
  }

  _handleThumbnailPositionChange(event) {
    this.setState({ thumbnailPosition: event.target.value });
  }

  _getStaticImages() {
    let images = [];
    for (let i = 1; i < 1; i++) {
      images.push({
        original:
          "https://res.cloudinary.com/dm8dxwvix/image/upload/v1590610036/deltingoaltango_b5e1em.png",
        thumbnail:
          "https://res.cloudinary.com/dm8dxwvix/image/upload/v1590610036/deltingoaltango_b5e1em.png",
      });
    }

    return images;
  }

  _resetVideo() {
    this.setState({ showVideo: {} });

    if (this.state.showPlayButton) {
      this.setState({ showGalleryPlayButton: true });
    }

    if (this.state.showFullscreenButton) {
      this.setState({ showGalleryFullscreenButton: true });
    }
  }

  _toggleShowVideo(url) {
    this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
    this.setState({
      showVideo: this.state.showVideo,
    });

    if (this.state.showVideo[url]) {
      if (this.state.showPlayButton) {
        this.setState({ showGalleryPlayButton: false });
      }

      if (this.state.showFullscreenButton) {
        this.setState({ showGalleryFullscreenButton: false });
      }
    }
  }

  _renderVideo(item) {
    return (
      <div>
        {this.state.showVideo[item.embedUrl] ? (
          <div className="video-wrapper">
            <a
              className="close-video"
              onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
            ></a>
            <iframe
              className="iframe-vid"
              src={item.embedUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
            <div className="play-button"></div>
            <img className="image-gallery-image" src={item.original} />
            {item.description && (
              <span
                className="image-gallery-description"
                style={{ right: "0", left: "initial" }}
              >
                {item.description}
              </span>
            )}
          </a>
        )}
      </div>
    );
  }

  render() {
    return (
      <section className="app">
        <ImageGallery
          ref={(i) => (this._imageGallery = i)}
          items={this.images}
          lazyLoad={false}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={
            this.state.showFullscreenButton &&
            this.state.showGalleryFullscreenButton
          }
          showPlayButton={
            this.state.showPlayButton && this.state.showGalleryPlayButton
          }
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
        />
      </section>
    );
  }
}
export default videoCarousel;

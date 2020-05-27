import React,{Fragment} from 'react';
import ReactAudioPlayer from 'react-audio-player';
import serpiente from './serpiente.mp3'
import Logo from '../images/Logo.png'
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import {audioList1} from './audioList'

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
    <header>
      <div className='header-logo'>
        <img className='img img-fluid'
         style={{maxHeight:''}} 
         src={Logo} alt="Logo-principal"/>
      </div>
      <div className='text-center'>

      <h5 className='titulo-naranja-neon'>Lost Fusión - Serpiente</h5>
        <br/>
      {/* <ReactAudioPlayer
          src={serpiente}
          autoPlay
          controls
       /> */}



       {/* <ReactJkMusicPlayer {...options} /> */}

      </div>
      {/* <p className="titulo-naranja-neon texto-regular text-center">
        Official
      </p> */}
    </header>
    <div>
    <h1> cualquier cosa</h1>
    </div>
  
  </Fragment>
  )
  
}

export default Home;

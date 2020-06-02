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

const newHome = () => {
    const options = { 
        audioLists: audioList1,
        remove: false,
        showDownload: false,
      }
    
    return (
        <Fragment>
            Hola home 
        </Fragment>


    )
}

export default newHome
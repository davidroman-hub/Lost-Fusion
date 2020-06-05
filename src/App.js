import React,{Fragment} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ReactJkMusicPlayer from "react-jinke-music-player";
import {audioList1} from './sections/audioList'
//imports
import NavBar from '../src/sections/NavBar'
import NewHome from '../src/sections/newHome'
import Gallery from '../src/sections/pages/Gallery'
import Videos from '../src/sections/pages/Videos'
import Contact from './sections/Contact-us'
const App = () => {
  
const options = { 
  audioLists: audioList1,
  remove: false,
  showDownload: false,
}
  
  return (
    
    <BrowserRouter>
      <Fragment>
          <Route exact path="/" component={NewHome}/>
          <Route exact path="/home" component={NewHome}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/galeria" component={Videos}/>
      </Fragment>
    </BrowserRouter>
   
  )
}

export default App;

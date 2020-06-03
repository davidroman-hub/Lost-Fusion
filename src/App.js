import React,{Fragment} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import ReactJkMusicPlayer from "react-jinke-music-player";
import {audioList1} from './sections/audioList'
//imports
import NavBar from '../src/sections/NavBar'
import Home from '../src/sections/Home'
import Prensa from './sections/pages/Prensa'
import Highlights from './sections/pages/Highlights'
import Albums from './sections/pages/Albums'
import Videos from './sections/pages/Videos'
import NewHome from '../src/sections/newHome'
import Gallery from '../src/sections/pages/Gallery'
const App = () => {
  
const options = { 
  audioLists: audioList1,
  remove: false,
  showDownload: false,
}
  
  return (
    
    <BrowserRouter>
      <Fragment>
      <ReactJkMusicPlayer {...options} />
          {/* <NavBar/> */}
          <Route exact path="/" component={NewHome}/>
          <Route exact path="/gallery" component={Gallery}/>
          <Route exact path="/highlights" component={Prensa}/>
          <Route exact path="/albums" component={Albums}/>
          <Route exact path="/videos" component={Videos}/>
      </Fragment>
    </BrowserRouter>
   
  )
}

export default App;

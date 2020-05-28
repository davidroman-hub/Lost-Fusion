import React,{Fragment} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
//imports
import NavBar from '../src/sections/NavBar'
import Home from '../src/sections/Home'


const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
          <NavBar/>
          <Home />
      </Fragment>
    </BrowserRouter>
   
  )
}

export default App;

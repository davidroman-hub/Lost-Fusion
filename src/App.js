import React,{Fragment} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import NewHome from '../src/sections/newHome'


const App = () => {
  
  return (
    
    <BrowserRouter>
      <Fragment>
          <Route exact path="/" component={NewHome}/>
          <Route exact path="/home" component={NewHome}/>
      </Fragment>
    </BrowserRouter>
   
  )
}

export default App;

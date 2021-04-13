import React,{Fragment} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import NewHome from '../src/sections/newHome'
import Videos from '../src/sections/pages/Videos'

const App = () => {
  
  return (
    
    <BrowserRouter>
      <Fragment>
          <Route exact path="/" component={NewHome}/>
          <Route exact path="/home" component={NewHome}/>
          <Route exact path="/galeria" component={Videos}/>
      </Fragment>
    </BrowserRouter>
   
  )
}

export default App;

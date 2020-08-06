import React from 'react';
import './App.css';
import Home from "./Home"
import {BrowserRouter,Route} from 'react-router-dom';
import Resume from './Resume'
import Mobile from './Mobile'
import Mob from './Mob'
import Iphone from './Iphone'
import Iph from './Iph'




function App() {
  

  return (
    <div className="App">

   
   <Route exact path='/' component={Home} />
   <Route exact path='/Resume' component={Resume}/>
   <Route exact path='/' component={Mobile}/>
   <Route exact path='/Mob' component={Mob}/>
   <Route exact path='/' component={Iphone}/>
   <Route exact path='/Iph' component={Iph}/>
    
    




    </div>
  );
}

export default App;

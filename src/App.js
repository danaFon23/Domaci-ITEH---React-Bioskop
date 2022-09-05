
import './App.css';

import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import data from './components/elements/Data';
import MyRoutes from './components/elements/MyRoutes'



const App = () => {
  const {movieItems}  = data;

  return (
    <div>
      <BrowserRouter> 
        <NavBar></NavBar>
        <MyRoutes movieItems={movieItems}/>
          
      </BrowserRouter>
    </div>
  );
  
  

}

export default App

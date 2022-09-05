
import './App.css';

import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import data from './components/elements/Data';
import MyRoutes from './components/elements/MyRoutes'



const App = () => {
  const {movieItems}  = data;
  const [cartItems, setCartItems] = useState([]);
  

  const handleAddMovie = (movie) =>{
    const MovieExist = cartItems.find((item) => item.id === movie.id);
    if(MovieExist){
      setCartItems(
        cartItems.map((item) =>
          item.id === movie.id
            ? { ...MovieExist, quantity: MovieExist.quantity + 1 }
            : item
        )
      );
    }else{
      setCartItems([...cartItems,{...movie, quantity : 1}]);
    }
  };
  
  const handleRemoveMovie = (movie) =>  {
    const MovieExist = cartItems.find((item) => item.id === movie.id);
    if(MovieExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== movie.id));
    }else{
      setCartItems(
        cartItems.map((item) => item.id === movie.id ?
        {...MovieExist,quantity: MovieExist.quantity - 1} : item)
      )
    }
  }
  
  const clearCart = () => {
    setCartItems([]);
  }

  return (
    <div>
      <BrowserRouter> 
        <NavBar></NavBar>
        <MyRoutes movieItems={movieItems} cartItems={cartItems} 
                  handleAddMovie={handleAddMovie} 
                  handleRemoveMovie={handleRemoveMovie}
                  clearCart={clearCart}/>
          
      </BrowserRouter>
    </div>
  );

}

export default App

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from '../Cart'
import Movies from '../Movies'
import Signup from '../Signup'

const MyRoutes = ({movieItems,cartItems, handleAddMovie, handleRemoveMovie, clearCart}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Movies movieItems={movieItems} handleAddMovie={handleAddMovie}/>} />
            <Route path='/home' element = {<Movies movieItems={movieItems} handleAddMovie={handleAddMovie}/>} />
            <Route path='/signup' element = {<Signup />} />
            <Route path='/cart' element = {<Cart cartItems={cartItems} handleAddMovie={handleAddMovie} 
                                                 handleRemoveMovie={handleRemoveMovie} clearCart={clearCart}/>} />
        </Routes>
    </div>
  );
};

export default MyRoutes
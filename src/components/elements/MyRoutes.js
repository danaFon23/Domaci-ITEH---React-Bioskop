import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from '../Cart'
import Movies from '../Movies'
import Signup from '../Signup'

const MyRoutes = ({movieItems,cartItems, handleAddMovie, handleRemoveMovie}) => {
  return (
    <div>
        <Routes>
            <Route path='/' exact element = {<Movies movieItems={movieItems} handleAddMovie={handleAddMovie}/>} />
            <Route path='/signup' exact element = {<Signup />} />
            <Route path='/cart' exact element = {<Cart cartItems={cartItems} handleAddMovie={handleAddMovie} handleRemoveMovie={handleRemoveMovie}/>} />
        </Routes>
    </div>
  )
}

export default MyRoutes
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Movies from '../Movies'

const MyRoutes = ({movieItems}) => {
  return (
    <div>
        <Routes>
            <Route path='/'  element = {<Movies movieItems={movieItems}/>}/>
            
        </Routes>
    </div>
  )
}

export default MyRoutes
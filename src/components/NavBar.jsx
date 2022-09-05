import React from 'react';
import {Link} from 'react-router-dom';  
import {FiShoppingCart} from 'react-icons/fi';

function NavBar() {
  return (
    <header className='header'>
        <div>
            <h1>
                <Link to='/' className='logo'>Online cinema </Link>
            </h1>
        </div>
        
        <div className='header-links'>
            <ul>
                <li>
                    <Link to='/home'>Home </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/signup'>Signup</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/cart'> <FiShoppingCart /> </Link>
                    
                </li>
            </ul>
        </div>
    </header>
    
  )
}

export default NavBar
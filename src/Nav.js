import React from 'react'
import './Navbar.css'
import Home from './pages/Home'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <div className='nav'>
                <h1>EARRING STORE</h1>
                <Link to='/cart'><li>Cart</li></Link>

            </div>

        </div>
    )
}

export default Nav
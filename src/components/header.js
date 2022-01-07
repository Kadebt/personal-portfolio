import React from 'react'
import { Link } from 'react-router-dom'
import './styling/header.css'

const Header = () => {
    return(
        <div className='header-div'>
        <div className='info-div'>
        <img className='logo' src='https://img.icons8.com/cotton/64/000000/source-code--v5.png'/>
        <h1 className='name'>Kade Thompson</h1>
        </div>
        <div className='links-div'>
        <Link className='header-link' to='/'><p>MyWork</p></Link>
        <Link className='header-link' to='/aboutme'>About Me</Link>
        <Link className='header-link' to='/contactme'>Contact Me</Link>
        </div>
        
        </div>
    )
}

export default Header
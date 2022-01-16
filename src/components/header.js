import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './styling/header.css'
import { BiCodeAlt } from 'react-icons/bi'

const Header = (props) => {

        // const linkHighlight = () => {
        //     const location = useLocation
        //     if(location = '/'){
                
        //     }
        // }
    return(
        <div>
        <div className='header-div'>
        <div className='info-div'>
         <p className='logo'> <BiCodeAlt/> </p>
        <div className='title-div'>
        <h1 className='name'>Kade Thompson</h1>
        <p className='title'>Full Stack Web Developer</p>
        </div>
        </div>
        <div className='links-div'>
        <Link className='header-link' to='/'><p>MyWork</p></Link>
        <Link className='header-link' to='/aboutme'>About Me</Link>
        <Link className='header-link' to='/contactme'>Contact Me</Link>
        </div>
        </div>
        <hr className='line-break'/>
        </div>
    )
}

export default Header
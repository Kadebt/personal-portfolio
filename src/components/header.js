import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div>
        <img src=''/>
        <Link to='/'><p>MyWork</p></Link>
        <Link to='/aboutme'>About Me</Link>
        <Link to='/contactme'>Contact Me</Link>
        </div>
    )
}

export default Header
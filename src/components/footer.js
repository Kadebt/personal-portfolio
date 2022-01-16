import React from 'react'
import './styling/footer.css'
import { ImGithub } from 'react-icons/im'
import {SiTwitter} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
    return(
    <div className='footer-div'>
        <a className='footer-links' href="https://www.linkedin.com/in/kadethompson3/"><BsLinkedin/></a>
        <div className='vl'></div>
        <a className='footer-links' href="https://github.com/Kadebt"> <ImGithub/></a>
        <div className='vl'></div>
        <a className='footer-links' href="https://twitter.com/kadebthompson"> <SiTwitter/> </a>
    </div>
    )
}

export default Footer
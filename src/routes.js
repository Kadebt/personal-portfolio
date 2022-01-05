import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Projects from './components/projects'
import Aboutme from './components/aboutme'
import Contactme from './components/contactme'

export default <Routes>
    {/* <Route path = '/'/> */}
    <Route path = '/' element={<Projects/>}/>
    <Route path = '/aboutme' element={<Aboutme/>}/>
    <Route path = '/contactme' element={<Contactme/>}/>
</Routes>
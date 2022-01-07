import React from 'react'
import './App.css';
import Routes from './routes'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <div className='body'>
      <Header/>
      {Routes}
      <Footer/>
    </div>
  )
}

export default App;

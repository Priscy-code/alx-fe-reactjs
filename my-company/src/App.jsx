// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <div>
      <Navbar/>
        <BrowserRouter>
    <Routes>
      <Route path= './components/Home' element = {<Home/>}/>
      <Route path='./components/About' element = {<About/>}/>
      <Route path='./components/Services' element = {<Services/>}/>
      <Route path='./components/Contact' element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  
      
  
  )
}

export default App

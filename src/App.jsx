import { useState } from 'react'

import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './common/NavBar'

function App() {
  

  return (
    <>
    

    <Router>

      <Navbar/>

      <Routes>

        <Route path='/' element={<div className='bg-blue-800'>Home page</div>}/>

      </Routes>

    </Router>

    </>
  )
}

export default App

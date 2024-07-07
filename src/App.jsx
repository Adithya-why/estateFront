import { useState } from 'react'

import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './common/NavBar'
import Landing from './components/Landing'

function App() {
  

  return (
    <>
    

    <Router>

      <Navbar/>

      <Routes>

        <Route path='/' element=

        {
        <Landing>
          
        </Landing>
        }
        
        />

      </Routes>

    </Router>

    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './common/NavBar'
import Landing from './components/Landing'
import LoginForm from './components/LoginForm'

function App() {
  

  return (
    <>
    

    <Router>

      <Navbar/>

      <Routes>

        <Route path='/' element=

        {
        <Landing>
          <LoginForm/>
        </Landing>
        }
        
        />

      </Routes>

    </Router>

    </>
  )
}

export default App

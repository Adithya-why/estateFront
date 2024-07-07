import { useState } from 'react'

import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    

    <Router>

      <h1>Navbar</h1> 

      <Routes>

        <Route path='/' element={<div>Home page</div>}/>

      </Routes>

    </Router>

    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './common/NavBar'
import Landing from './components/Landing'
import LoginForm from './components/LoginForm'

function App() {

  let [formStage, setFormStage] = useState(0);

  let formList = [];
  formList.push(<LoginForm next={setFormStage} formStage={formStage}/>);
  formList.push(<div>NExt stage</div>)
  
  

  return (
    <>
    

    <Router>

      <Navbar/>

      <Routes>

        <Route path='/' element=

        {
        <Landing>
          {formList[formStage]}
        </Landing>
        }
        
        />

      </Routes>

    </Router>

    </>
  )
}

export default App

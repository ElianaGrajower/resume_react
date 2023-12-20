import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
import Home from './pages'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import ResumeBuilder from './components/resumeBuilder'
import { Provider } from './context/input'
import Register from './components/login_logout/register'
import Login from './components/login_logout/login'

// import { Provider } from './context/input'

function App() {

  return (
    <>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path='/firebase/index.js' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/resumebuilder' element={<ResumeBuilder />} />
          </Routes>
        </Provider>
      </BrowserRouter>

    </>


  )
}

export default App

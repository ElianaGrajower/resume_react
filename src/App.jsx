import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import ResumeBuilder from './components/resumeBuilder'

// import { Provider } from './context/input'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/resumebuilder' element={<ResumeBuilder/>}/>
            {/* <Route path='/resumebuilder' element={<ResumeBuilder addResume={addResume} />} /> */}
          </Route>
        </Routes>

      </BrowserRouter>
      <Home/>
    </>
    // // <Provider>
    //   <Home/>
    // // </Provider>
  )
}

export default App

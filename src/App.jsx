import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'

// import { Provider } from './context/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BrowserRouter>
        <Link to="/firebase"> firebase </Link>
        <Route path='/firebase' element={<About />} />
      </BrowserRouter> */}
      <Home />
    </>
    // // <Provider>
    //   <Home/>
    // // </Provider>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages'
// import { Provider } from './context/input'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <Provider>
      <Home/>
    // </Provider>
  )
}

export default App

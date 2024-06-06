import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componenets/Header'
import Registertion from './componenets/registertion'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className="row">
        <Header></Header>
      </div>
      <div className="row">
        <Registertion></Registertion>
      
      </div>
    </div>
  )
}

export default App

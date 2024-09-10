import First from './Components/First'
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <First/>
  </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

 const handleCount =(() =>{
    setCount(count+1)
  })

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
       
       <button onClick={handleCount}> count is {count}</button>
      </div>
    </>
  )
}

export default App

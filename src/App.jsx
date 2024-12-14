import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './View/Home'
import { Button } from './Components/Button'

function App() {
  const [count, setCount] = useState(0)

  function contar() {
    return setCount(count+1);
  }

  return (
    <>
      <Home count={count}/>
      {/* <Button contar={contar}/> */}
    </>
  )
}

export default App

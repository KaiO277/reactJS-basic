import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import './App.scss'
import MyComponent from './Example/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent />
    </>
  )
}

export default App

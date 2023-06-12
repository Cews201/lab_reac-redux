import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'



function App() {

  const counter = useSelector (state => state.counter);

  return(
    <div>
      <h1>Contador:{counter}</h1>
    </div>
  )
}

export default App

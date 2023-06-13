import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'



function App() {

  const identificacion = useSelector(state => state.identificacion);


  return(
    <div>
      
      <h1>Identificacion: {identificacion} </h1>
    </div>
  )
}

export default App

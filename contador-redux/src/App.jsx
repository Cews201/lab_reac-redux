import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from './components/Dashboard'
import Login from './components/Login'



function App() {

  const identificacion = useSelector(state => state.identificacion);


  return(
    <div>      
      <h1>Identificacion: {identificacion} </h1>
    </div>
  )
}

export default App

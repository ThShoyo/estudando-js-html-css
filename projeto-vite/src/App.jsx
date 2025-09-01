import { useState } from 'react'
import './App.css'
import Mensagem from './assets/components/Mensagem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Aula ReactJS</h1>
      <Mensagem />
      <hr />
      <InfoAluno />
      <hr />
      <InfoCurso /> 
    </>
  )
}

export default App

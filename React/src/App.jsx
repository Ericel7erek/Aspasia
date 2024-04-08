import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EurosToDolares from './Ejercicios/EurosToDolares'
import Fahrenheit from './Ejercicios/Fahrenheit'
import Rectangulo from './Ejercicios/Rectangulo'
const App = () => {

<EurosToDolares/>
  const text = <p>Hola</p>

  const characters =[
    {
      name: "John",
      age: 34,
    },
    {
      name: "Jane",
      age: 24,
    },
    {
      name: "Joe",
      age: 32,
    }
  ]
  const data = characters.map((character) => {character.name})

  return (
  <div>
    <EurosToDolares/>
    <Fahrenheit/>
    <Rectangulo />
    
    <h1>{text}</h1>
    <h2>{data}</h2>
    <div><p>par</p></div>
    {100+100}
  </div>
  )
}

export default App

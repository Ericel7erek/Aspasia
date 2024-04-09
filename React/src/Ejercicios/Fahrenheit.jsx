import React, { useState } from 'react'
import { useRef } from 'react'

const Fahrenheit = () => {
    const [centigrados, setCentigrados] = useState('')
    const [fahrenheit, setFahrenheit] = useState('')
    const calcular = () => {
        setFahrenheit( centigrados * (9/5) + 32)
    }

  return (
    <div>
        <div><h1>Fahrenheit</h1></div>
        <input type="text" onChange={e=> setCentigrados(e.target.value)}/>
        <button onClick={calcular}>It's Burning</button>
        <output>{fahrenheit}</output>
    </div>
  )
}

export default Fahrenheit
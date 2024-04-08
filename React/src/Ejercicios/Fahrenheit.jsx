import React, { useState } from 'react'
import { useRef } from 'react'

const Fahrenheit = () => {
    const centigrados = useRef()
    const [fahrenheit, setFahrenheit] = useState('')
    const calcular = () => {
        setFahrenheit( centigrados.current.value * (9/5) + 32)
    }

  return (
    <div>
        <div><h1>Fahrenheit</h1></div>
        <input type="text" ref={centigrados}/>
        <button onClick={calcular}>It's Burning</button>
        <output>{fahrenheit}</output>
    </div>
  )
}

export default Fahrenheit
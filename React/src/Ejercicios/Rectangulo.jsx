import React from 'react'
import { useRef } from 'react'
const Rectangulo = () => {
    const width = useRef()
    const height = useRef()
    const res = useRef()
    const calculate = () => {
        const w = width.current.value
        const h = height.current.value
        res.current.value = w * h
    }

  return (
    <div>
        <div><h1>Rectangulo</h1></div>
        <input type="text" ref={width}/>
        <input type="text" ref={height}/>
        <button onClick={calculate}>Calculate</button>
        <output ref={res}></output>
    </div>
  )
}

export default Rectangulo
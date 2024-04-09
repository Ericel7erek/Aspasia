import React, { useState } from 'react'
import { useRef } from 'react'
const Rectangulo = () => {
    const [width, setWidth] = useState()
    const [height, setHeight] = useState()
    const [res, setRes] = useState()
    const calculate = () => {
        const w = width
        const h = height
        setRes(w * h)
    }

  return (
    <div>
        <div><h1>Rectangulo</h1></div>
        <input type="text" onChange={e=> setWidth(e.target.value)}/>
        <input type="text" onChange={e=> setHeight(e.target.value)}/>
        <button onClick={calculate}>Calculate</button>
        <output>{res}</output>
    </div>
  )
}

export default Rectangulo
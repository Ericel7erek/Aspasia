import React, { useState } from 'react'
import { useRef } from 'react'

const EurosToDolares = () => {
    const [euro, setEuro] = useState('')
    const [ dolar, setdolar ] = useState('')
    const calcular= ()=> 
        setdolar(euro *2) 
    
  return (
    <div style={{display:'flex', flexDirection:'column', width:"5rem"}}>
        <input type="text" onChange={e=> setEuro(e.target.value)}/>
        <button onClick={calcular}>Calcular</button>
        <output>{dolar}</output>
    </div>
  )
}

export default EurosToDolares
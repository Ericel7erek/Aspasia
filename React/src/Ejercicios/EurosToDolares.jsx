import React, { useState } from 'react'
import { useRef } from 'react'

const EurosToDolares = () => {
    const euroref = useRef()
    const [ dolar, setdolar ] = useState('')
    const calcular= ()=> 
        setdolar(euroref.current.value *2) 
    
  return (
    <div style={{display:'flex', flexDirection:'column', width:"5rem"}}>
        <input type="text" ref={euroref}/>
        <button onClick={calcular}>Calcular</button>
        <output>{dolar}</output>
    </div>
  )
}

export default EurosToDolares
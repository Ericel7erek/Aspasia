import React from 'react'
import data from '../assets/newJson/Falacia.json'

const Falacias = () => {
    
  return (
    <div>{data.map((F, I) => {return <p>{F.type}</p>})}</div>
  )
}

export default Falacias
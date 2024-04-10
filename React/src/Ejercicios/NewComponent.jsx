import React, { useState } from 'react'

const NewComponent = ({NewValue}) => {
    const [value, setValue] = useState(0)
    NewValue(value)

  return (
    <div>
        <h1>NewComponent</h1>
        <button onClick={()=>{
            setValue(value-1)
        }}>-</button>
        <input type="text" value={value} onChange={e =>{
            setValue(Number(e.target.value))
        } }/>
        <button onClick={()=>{
            setValue(value + 1)
        }}>+</button>
        </div>
  )
}

export default NewComponent
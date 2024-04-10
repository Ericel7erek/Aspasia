import React from 'react'
import { useState } from 'react'
const MyComponent = ({onSomeEvent}) => {

const [val, setVal] = useState(0)

  return (
<div>
    <input type="text" value={val} onChange={e=> setVal(Number(e.target.value))} />
    <button onClick={()=>onSomeEvent(val)} ></button>
</div>
  )
}

export default MyComponent
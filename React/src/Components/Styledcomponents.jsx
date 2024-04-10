import React from 'react'
import { Box, PopUp } from '../app/style'
import { useState } from'react';

const Styledcomponents = () => {
    const [color, setColor] = useState();
  return (
    <div>
        <button onClick={()=> setColor(!color)}>Pulsa</button>
        <Box color={color}></Box>
        <PopUp visible={color}/>
    </div>
  )
}

export default Styledcomponents
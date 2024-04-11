import React from 'react'
import { Box, PopUp, Rectangulo, StatusBarContainer } from '../app/style'
import { useState } from'react';

const Styledcomponents = () => {
    const [color, setColor] = useState();
  return (
    <div>
        <button onClick={()=> setColor(!color)}>Pulsa</button>
        {/* <Box color={color}></Box> */}
        <PopUp visible={color}>
          <button onClick={()=>setColor(!color)}>Cerrar</button>
        </PopUp>
        {/* <Rectangulo><p>dammdamd</p></Rectangulo> */}
        {/* <StatusBarContainer level={30}/> */}
    </div>
  )
}

export default Styledcomponents
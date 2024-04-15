import React from 'react'
import { useState } from 'react'
import scenes from '../assets/CuentaAssets/data/scenes'
import { Door, Pa, Scene } from '../app/style'
import { useEffect } from 'react'

const Cuenta = () => {
    const getSceneByName = name => scenes.find(obj => obj.title == name)
    const [currentCuenta, setCurrentCuenta]= useState(getSceneByName('espacio'));
    console.log(scenes);
    console.log(currentCuenta);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
      const calculateSceneDimensions = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const a = 16;
    const b = 9;
    const proportion = a / b;
    const proportion2 = w / h;
    if (proportion > proportion2) {
      setWidth(w);
      setHeight(w * b / a);
    } else {
      setHeight(h);
      setWidth(h * a / b);
    }
  }

useEffect(() => {
    window.addEventListener('resize', calculateSceneDimensions);
    calculateSceneDimensions();
}, []);
        
  return (
    <div>
            <Scene back={currentCuenta.back} width={width+"px"} height={height+"px"}>
                <Pa>{currentCuenta.txt}</Pa>
            {currentCuenta.doors.map((door, i) => <Door key={i} onClick={() => {
                setCurrentCuenta(getSceneByName(door.target))}} data={door} />)
            }
            </Scene>
        
    </div>
  )
}

export default Cuenta
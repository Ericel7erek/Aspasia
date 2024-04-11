import React,{useState} from 'react'
import { P } from '../app/style'


const Teatro = () => {
    const [currentP, setCurrentP] = useState(true);
 const textos = [
  "Hola Romeo.",
  "Hola Julieta.",
  "Te amo, Romeo.",
  "Y yo a tí Julieta.",
  "Fuguémonos a Mexico.",
  "Mejor no, no le caes bien a mi familia y si seguimos adelante con nuestro amor, esta historia acabará mal.",
  "Poz vaya."
]
if (currentP===textos.length || currentP<0) {
    setCurrentP(0)
}
const t= textos.map((t,i) => {
    return <P color={currentP===i} key={i}>{t}</P>
})

  return (
    <div>
        <button onClick={()=>setCurrentP(currentP-1)}>Anterior</button>
        {t}
        <button onClick={()=>setCurrentP(currentP+1)}>Siguiente</button>
        
    </div>
    
  )
}

export default Teatro
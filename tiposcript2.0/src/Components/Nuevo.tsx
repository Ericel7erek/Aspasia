import { useState } from 'react'
import { access } from '../Firebase/api'

const Nuevo = () => {
    const [user, setUser] = useState<string>()
  return (
    <div>
        <input type="text" onChange={(e)=> setUser(e.target.value)} />
        <p>{user}</p>
        <button onClick={()=> console.log(access(user))
        } >Acceder</button>
    </div>
  )
}

export default Nuevo
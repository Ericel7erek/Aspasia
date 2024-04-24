import { useState } from "react"
import { createItem } from "../Firebase/api"


const Write = () => {
    const [userName, setUserName] = useState<string | null>(null)

  return (
    <div>
        <input type="text" onChange={(e)=> setUserName(e.target.value)} />
        <button onClick={()=> createItem({userName})}>Create</button>
    </div>
  )
}

export default Write
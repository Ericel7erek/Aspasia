import { useState } from "react"
import { createItem } from "../Firebase/api"

const Write = () => {
const [userName, setUserName] = useState<string>("");
return (
<div> 
    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} /> 
    <button onClick={() => {
        createItem({ userName })
        setUserName("")
    }}>Create</button> 
</div> 
) 
} 
export default Write
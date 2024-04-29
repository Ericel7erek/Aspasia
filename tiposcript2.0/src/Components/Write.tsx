import { useState } from "react"
import { createItem } from "../Firebase/api"

const Write = () => {
const [userName, setUserName] = useState<string>("");
const [date, setDate] = useState<string>("")

return (
<div> 
    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} /> 
    <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} />
    <button onClick={() => {
        createItem({ userName,date })
        setUserName("")
    }}>Create</button> 
</div> 
) 
} 
export default Write
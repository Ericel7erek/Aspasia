import { useState } from "react"
import { deleteItem, todo, updateItem } from "../Firebase/api"
import { useParams } from "react-router-dom"

const Tr = ({nam,query}:{nam:any,query:any},) => {
    const [userName, setUserName] = useState(nam.userName)
    const [date, setDate] = useState(nam.date)
    const {id= "" } = useParams<string>()
  return (
    <div>
        <tr>
        <td style={{border: '1px solid'}}>
        {/*<Link to={`/edit/${name.id}`}>*/}
        {nam.id}
        {/*</Link>*/}
        </td>

        <td style={{border: '1px solid'}}>
        <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}/>
        </td>
        <td style={{border: '1px solid'}}>
        <input type="date" value={date} onChange={(e)=> setDate(e.target.value)}/>
        </td>
        <td><button onClick={()=>{
            console.log('rrrrrrrrrrrr', id, name)
            updateItem(nam.id, {userName, date})
            query()
        }}>Update</button></td>
        <td><button onClick={()=>{{
            deleteItem(nam.id)
            query()
        }}}>Delete</button></td>
        </tr></div>
)}

export default Tr
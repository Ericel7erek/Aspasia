import  { useEffect, useState } from 'react'
import { getItems, todo } from '../Firebase/api'
import { createItem } from "../Firebase/api"
import Tr from './Tr'
// import { Link } from 'react-router-dom'


const Read = () => {
  const [users, setUsers] = useState<todo[]>()
  const [userName, setUserName] = useState<string>("");
  const [date, setDate] = useState<string>("")
  const [name, setName] = useState<todo>({
        userName: "",
        date: ""
    })
useEffect(() => {
  query()
  },[])

  const query = () => {
    getItems().then(setUsers)
  }
  console.log('222222222', name)
  return (
    <div>
        {users && users.map((nam,i:number) => 
        <Tr nam={nam} query={query} />
        )}
        <br />
        <td style={{border: '1px solid'}}>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} /> </td>
        <td style={{border: '1px solid'}}>
        <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} />
        </td>
        <td style={{border: '1px solid'}}>
        <button onClick={() => {
        createItem({ userName,date })
        setUserName("")
        query()
    }}>Create</button> </td>
        
    </div>
  )
}

export default Read
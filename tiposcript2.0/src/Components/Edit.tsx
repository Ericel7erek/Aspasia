import { useEffect, useState } from "react";
import { deleteItem, getItemById, todo, updateItem } from "../Firebase/api";
import {  Navigate, useNavigate, useParams } from "react-router-dom";



const Edit = () => {
    const [name, setName] = useState<todo>({
        userName: "",
        date: ""
    })
    const navigate = useNavigate()
    const {id} = useParams<string>()
useEffect(() => {
  query()
  },[])

  const query = () => {
    getItemById(id).then((data:any)=> setName(data))
  }
  console.log(name);
  
  return (
    <div>
        <input type="text" value={name.userName} onChange={(e)=> setName({...name, userName:e.target.value})}/>
        <input type="date" value={name.date} onChange={(e)=> setName({...name, date:e.target.value})}/> <br />
        <button onClick={()=>updateItem(id, name)}>Update</button>
        <button onClick={()=>{
            deleteItem(id)
            navigate('/')
            }}>Delete</button>
    </div>
  )
}


export default Edit
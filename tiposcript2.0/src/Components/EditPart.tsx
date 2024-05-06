import React, { useState } from 'react'
import { deleteTask, getUser, updateTask } from '../Firebase/api';
import { useUserContext } from '../Provider/UserProvider';

const EditPart = ({task,getTasks,i}:{task:any, getTasks:any, i:any}) => {
        const [user] = useUserContext();
        const [txt, setTxt] = useState(task)
        const [Editing, setEditing] = useState(false);
  return (
    <div>
        
        <p>{task}</p>
        <button onClick={()=>setEditing(!Editing)} >Edit</button><br />
        {Editing && (
                <>
                    <input
                        value={txt}
                        onChange={(e) => setTxt(e.target.value)}
                    /> <br />
            <button onClick={async ()=>{
                await updateTask(user.uid,i,txt)
                getTasks()
                setTxt('')
                }}>Update</button>
                </>)}
            <button onClick={async ()=>{
                await deleteTask(user.uid,i)
                getTasks()
                }}>Delete</button>
        
            </div>
            )}
  


export default EditPart
import { useEffect, useState } from 'react';
import { useUserContext } from './UserProvider';
import { deleteTask, getUser, newTask, updateTask } from '../Firebase/api';
import EditPart from '../Components/EditPart';

const UserInfo = () => {
    const [user] = useUserContext();
    const [txt, setTxt] = useState()
    const [tasks, setTasks] = useState();
    const [Editing, setEditing] = useState(false);
    const getTasks = () => getUser(user?.id).then(u => {
        u.tasks && setTasks(u.tasks);
    })
    useEffect(()=> {
    getTasks()
    },[])
    return (
        <>
        <p>Hello {user?.userName}, Welcome to your todo List:</p>
        
        {tasks &&tasks.map((task,i)=> {
        console.log('3333333',task)
       return <EditPart task={task} getTasks={getTasks}  i={i}/>
       }
        // <>
        // <p key={i}>{task.txt}</p>
        // <button onClick={()=>setEditing(!Editing)} >Edit</button>
        // {Editing && (
        //         <>
        //             <input
        //                 value={txt}
        //                 onChange={(e) => setTxt(e.target.value)}
        //             /> <br />
        //     <button onClick={async ()=>{
        //         await updateTask(user.id,i,task.txt)
        //         getTasks()
        //         }}>Update</button>
        //         </>)}
        //     <button onClick={async ()=>{
        //         await deleteTask(user.id,i)
        //         getTasks()
        //         }}>Delete</button>
        // </>
            )}
        <input type="text" value={txt} onChange={(e)=>setTxt(e.target.value)}/>
        <button onClick={async ()=> {
            await newTask(user?.id, txt)
            getTasks()
            setTxt('')
        }}>
            Save
        </button>
        </>
);
}

export default UserInfo;
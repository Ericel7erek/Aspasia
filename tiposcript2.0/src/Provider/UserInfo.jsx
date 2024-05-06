import { useEffect, useState } from "react";
import { useUserContext } from "./UserProvider";
import {
  deleteTask,
  getUser,
  logout,
  newTask,
  updateTask,
} from "../Firebase/api";
import EditPart from "../Components/EditPart";
import { Route, useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [user, setUser] = useUserContext();
  const [txt, setTxt] = useState();
  const [tasks, setTasks] = useState();
  const nav = useNavigate();
  //   const [Editing, setEditing] = useState(false);

  const getTasks = async () =>
    await getUser(user?.uid).then((u) => {
      console.log("222222222", u);
      u.tasks && setTasks(u.tasks);
    });
  useEffect(() => {
    console.log("5555555555");

    if (user) {
      console.log("33333333", user);
      getTasks();
    } else {
      const authUserKey = Object.keys(window.localStorage).filter((item) =>
        item.startsWith("firebase:authUser")
      )[0];

      const v = localStorage.getItem(authUserKey);
      if (v) {
        const data = JSON.parse(v);
        setUser(data);
        console.log("dddddddddd", data);
      }
    }
  }, [user]);
  return (
    <>
      {user ? (
        <>
          <p>Hello {user?.email}, Welcome to your todo List:</p>

          {tasks &&
            tasks.map(
              (task, i) => {
                console.log("3333333", task);
                return <EditPart task={task} getTasks={getTasks} i={i} />;
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
          <input
            type="text"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
          />
          <button
            onClick={async () => {
              console.log("11111111111", user);
              await newTask(user?.uid, txt);
              getTasks();
              setTxt("");
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              logout();
              nav("/login");
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        nav("/login")
      )}
    </>
  );
};

export default UserInfo;

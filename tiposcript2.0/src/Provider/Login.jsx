import { useEffect, useState } from "react";
import { loginWithGoogle, signIn, signUp } from "../Firebase/api";
import { useUserContext } from "./UserProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useUserContext();
  const [users, setUsers] = useState("");
  const [created, isCreated] = useState(true);

  const onSubmitSignIn = () => {
    fetch("http://localhost:5000/book/signin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: email.toLowerCase(),
        password: pass,
      }),
    }).then((response) => console.log(response));
  };
  const seeUsers = () => {
    fetch("http://localhost:5000/book/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
  console.log(users);
  const onSubmitRegister = () => {
    fetch("http://localhost:5000/book/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: email.toLowerCase(),
        password: pass,
      }),
    })
      .then((response) => response.json())
      .then(console.log);
  };
  return (
    <>
      {created ? (
        <>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />{" "}
          <br />
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />{" "}
          <br />
          <button
            onClick={async () => {
              // signUp(email, pass);
              await onSubmitRegister();
              isCreated(!created);
            }}
          >
            Create User
          </button>
        </>
      ) : (
        <>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />{" "}
          <br />
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
          />{" "}
          <br />
          <button
            onClick={async () => {
              // signIn(email, pass);
              await onSubmitSignIn();
              isCreated(!created);
            }}
          >
            Sign In
          </button>
        </>
      )}
      <br />
      <button onClick={() => isCreated(!created)}>Change</button> <br />
      <button onClick={() => loginWithGoogle()}>Login with Google</button>
      <br />
      <button
        onClick={() => {
          seeUsers();
        }}
      >
        See Users
      </button>
      <div>
        <h2>Registered Users</h2>
        <ul>
          {users &&
            users.map((user) => (
              <li key={user.id}>
                {user.id}: {user.email}
              </li>
            ))}
        </ul>
      </div>
      {/* <input type="text" onChange={(e)=> setUserName(e.target.value)} />
        <p>{user?.userName}</p>
        <p>{user?.id}</p>
        <button onClick={async ()=>{ 
          if(user){
            await access(userName)
          }
          else { 
            console.log("No hay usuario")
          }
        } }
      >Acceder</button> */}
    </>
  );
};

export default Login;

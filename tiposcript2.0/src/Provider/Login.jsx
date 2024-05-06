import { useEffect, useState } from 'react';
import { access, loginWithGoogle, signIn, signUp } from '../Firebase/api';
import { useUserContext } from './UserProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const Login = () => {
    const [email, setEmail]= useState('')
    const [pass, setPass]= useState('')
    const [user, setUser] = useUserContext();
    const [created, isCreated] = useState(true)
    // const [userName, setUserName] = useState()

    useEffect(() => {
    onAuthStateChanged(auth, user => {
          if (user) {
            console.log('user', user, ' userId:', user.uid);
            setUser(user);
        } else {
            console.log("No user logged");
            setUser(null);
        }
    })
  }, [])
    return (
        <>
        {created && 
        <>
        <input type="email" onChange={(e)=> setEmail(e.target.value)}/> <br />
        <input type="password" onChange={(e)=> setPass(e.target.value)}/> <br />
        <button onClick={()=>{
            signUp(email,pass)
            isCreated(!created)
            }}>Create User</button>
        </>
        }
        {!created && 
        <>
        <input type="email" onChange={(e)=> setEmail(e.target.value)}/> <br />
        <input type="password" onChange={(e)=> setPass(e.target.value)}/> <br />
        <button onClick={()=>{
            signIn(email,pass)
            isCreated(!created)
        }}>Sign In</button>
        </>
        }
        <br />
        <button onClick={()=>isCreated(!created)}>Change</button> <br />
        <button onClick={()=> loginWithGoogle()}>Login with Google</button><br />

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
}

export default Login;
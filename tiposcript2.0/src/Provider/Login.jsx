import { access } from '../Firebase/api';
import { useUserContext } from './UserProvider';

const Login = () => {
    const [user, setUser] = useUserContext();

    return (
        <>
        <input type="text" onChange={(e)=> setUser({...user, userName:e.target.value})} />
        <p>{user?.userName}</p>
        <p>{user?.id}</p>
        <button onClick={async ()=>{ 
            if(user){
            const id = await access(user)
            setUser({...user, id});}
            else { 
                console.log("No hay usuario")
            }
    } }
        >Acceder</button>
        </>
    );
}

export default Login;
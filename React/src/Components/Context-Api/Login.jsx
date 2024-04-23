import { useUserContext } from "./UserProvider"

const Login = () => {
    const [,setUser] = useUserContext()
  return (
    <div>
        <button onClick={()=> setUser({ username: 'Paco', uid: 33 })}>
            SaveUser
        </button>
        </div>
  )
}

export default Login
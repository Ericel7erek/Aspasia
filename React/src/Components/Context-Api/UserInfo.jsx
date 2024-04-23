import { useUserContext } from "./UserProvider"

const UserInfo = () => {
    const [user] = useUserContext()
  return (
    <div><p>{user.username}</p></div>
  )
}

export default UserInfo
import { Link } from 'react-router-dom'
import { useUserContext } from '../Provider/UserProvider';

const Layout = ({children}:any) => {
        const [user] = useUserContext();
  return (
        <div>    
                <ul>
                        <li><Link to="/">Read</Link></li>
                        {/* <li><Link to="/Write">Write</Link></li> */}
                        <li><Link to="/Login">Login</Link></li>
                        {user?.id &&<li><Link to="/YourTasks">Tasks</Link></li>}
                </ul>
                <main>{children}</main>
        </div>
  )
}

export default Layout
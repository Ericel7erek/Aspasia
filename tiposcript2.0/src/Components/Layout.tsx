import { Link } from 'react-router-dom'

const Layout = ({children}:any) => {
  return (
        <div>    
                <ul>
                        <li><Link to="/">Read</Link></li>
                        {/* <li><Link to="/Write">Write</Link></li> */}
                        <li><Link to="/Nuevo">Nuevo</Link></li>
                </ul>
                <main>{children}</main>
        </div>
  )
}

export default Layout
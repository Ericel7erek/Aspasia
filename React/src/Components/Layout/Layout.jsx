import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div>
        <ul>
            <li><Link to="/Starwars/">Starwars</Link></li>
            <li><Link to="/products/">Products</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About" >About</Link></li>
            <li><Link to="/dadjabd" >AAAAAAAA</Link></li>
        </ul>
        <main>{children}</main>
    </div>
  )
}

export default Layout
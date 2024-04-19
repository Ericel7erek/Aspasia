import React from 'react'
import { Link } from 'react-router-dom'
import { UL } from '../../app/style'

const Layout = ({children}) => {
  return (
    <div>
        <UL>
            <li><Link to='/Falacias'>Falacias</Link></li>
            <li><Link to='/ChuckFacts'>ChuckFacts</Link></li>
            <li><Link to='/StyledComponents'>StyledComponents</Link></li>
            <li><Link to='/News'>News</Link></li>
            <li><Link to='/Cuenta'>Cuenta</Link></li>
            <li><Link to='/Teatro'>Teatro</Link></li>
            <li><Link to='/Trivia'>Trivia</Link></li>
            <li><Link to='/Training'>Training</Link></li>
            <li><Link to="/Starwars/1">Starwars</Link></li>
            <li><Link to="/products/1">Products</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About" >About</Link></li>
            <li><Link to="/dadjabd" >AAAAAAAA</Link></li>
        </UL>
        <main>{children}</main>
    </div>
  )
}

export default Layout
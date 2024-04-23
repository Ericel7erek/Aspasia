import React from 'react'
import UserProvider from './UserProvider'
import Login from './Login'
import UserInfo from './UserInfo'

const ContextApi = () => {
  return (
    <div>
      <UserProvider>
        <Login/>
          <UserInfo/>
      </UserProvider>
      </div>
  )
}

export default ContextApi
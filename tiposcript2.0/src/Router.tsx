
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './Components/Read'
import Write from './Components/Write'
import Layout from './Components/Layout'
import Edit from './Components/Edit'
import Login from './Provider/Login'
import UserInfo from './Provider/UserInfo'
import { useUserContext } from './Provider/UserProvider'

const Router = () => {
  const [user] = useUserContext();
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
    <Route path='/' element={<Read/>} />
    <Route path='/Write' element={<Write />} />
    <Route path='/edit/:id' element={<Edit/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/YourTasks' element={<UserInfo/>} />
    {/* {user?.id ?(<Route path='/YourTasks' element={<UserInfo/>} />) : (<Route path='/Login' element={<Login/>} />)} */}
    </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default Router
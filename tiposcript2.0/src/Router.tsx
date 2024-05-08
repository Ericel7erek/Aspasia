
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './Components/Read'
import Write from './Components/Write'
import Layout from './Components/Layout'
import Edit from './Components/Edit'
import Login from './Provider/Login'
import UserInfo from './Provider/UserInfo'
import VerHilos from './Provider/VerHilos'
import CreateHilos from './Provider/CreateHilos'
import Hilos from './Provider/Hilos'
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
    <Route path='/Ver' element={<VerHilos/>} />
    <Route path='/CreateHilos' element={<CreateHilos/>} />
    <Route path='/Hilos/:id' element={<Hilos/>} />
    {/* {user?.id ?(<Route path='/YourTasks' element={<UserInfo/>} />) : (<Route path='/Login' element={<Login/>} />)} */}
    </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default Router
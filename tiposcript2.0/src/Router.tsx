
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './Components/Read'
import Write from './Components/Write'
import Layout from './Components/Layout'
import Edit from './Components/Edit'
import Nuevo from './Components/Nuevo'

const Router = () => {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
    <Route path='/' element={<Read/>} />
    <Route path='/Write' element={<Write />} />
    <Route path='/edit/:id' element={<Edit/>} />
    <Route path='/Nuevo' element={<Nuevo/>} />
    </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default Router
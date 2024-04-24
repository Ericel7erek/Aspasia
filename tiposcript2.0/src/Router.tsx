
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './Components/Read'
import Write from './Components/Write'
import Layout from './Components/Layout'

const Router = () => {
  return (
    <BrowserRouter>
    <Layout>
    <Routes>
    <Route path='/' element={<Read/>} />
    <Route path='/Write' element={<Write />} />
    </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default Router
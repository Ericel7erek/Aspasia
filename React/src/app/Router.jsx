import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Layout from '../Components/Layout/Layout'
import Product from '../Components/Product'
import Starwars from '../Components/Starwars/Starwars'
import Profile from '../Components/Starwars/Profile'
const Router = () => {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
                  <Route path='/Starwars' element={<Starwars/>}/>

        <Route path='/Starwars/:id' element={<Starwars/>}/>
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/Layout" element={<Layout/>} />
        <Route path="*" element={<div><h1>404</h1></div>} />
        </Routes>
    </Layout>
    </BrowserRouter>
  )
}

export default Router
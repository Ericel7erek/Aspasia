import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Layout from '../Components/Layout/Layout'
import Product from '../Components/Product'
const Router = () => {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import Layout from '../Components/Layout/Layout'
import Product from '../Components/Product'
import Starwars from '../Components/Starwars/Starwars'
import Profile from '../Components/Starwars/Profile'
import Teatro from '../Components/Teatro'
import Trivia from '../Components/Trivia'
import Training from '../Components/Training'
import Cuenta from '../Components/Cuenta'
import Api from '../Components/Api'
import Styledcomponents from '../Components/Styledcomponents'
import ChuckApi from '../Components/ChuckApi'
import Falacias from '../Components/Falacias'
import JuegoDeMesa from '../Components/JuegoDeMesa'
import ContextApi from '../Components/Context-Api/ContextApi'
const Router = () => {
  return (
    <BrowserRouter>
    <Layout>
        <Routes>
        <Route path='/ContextApi' element={<ContextApi/>} />
        <Route path='/JuegoDeMesa' element={<JuegoDeMesa/>} />
        <Route path='/Falacias' element={<Falacias/>}/>
        <Route path='/ChuckFacts' element={<ChuckApi/>}/>
        <Route path='/StyledComponents' element={<Styledcomponents/>}/>
        <Route path='/News' element={<Api/>}/>
        <Route path='/Cuenta' element={<Cuenta/>}/>
        <Route path='/Teatro' element={<Teatro/>}/>
        <Route path='/Trivia' element={<Trivia/>}/>
        <Route path='/Training' element={<Training/>}/>
        <Route path='/Starwars/:id' element={<Starwars/>}/>
        <Route path="/Profile/:id" element={<Profile />} />
        <Route path="/Products/:id" element={<Product/>} />
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

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './Components/Read'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Read/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Restaurant from './Pages/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Profile />} />
    <Route path="/restaurant" element={<Restaurant />} />
    <Route path="/restaurante/:id" element={<Restaurant />} />
  </Routes>
)

export default Rotas
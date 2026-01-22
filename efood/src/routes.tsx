import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Categories from './Pages/Categories'
import Profile from './Pages/Profile'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    {/* MUDEI AQUI: De /profile para /perfil */}
    <Route path="/perfil" element={<Profile />} />
  </Routes>
)

export default Rotas

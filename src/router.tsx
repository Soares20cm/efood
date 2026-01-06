import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Profile from './Pages/Profile'

const Rotas = () => (
  <Routes>
    {/* Caminho da página 1 (Lista de Restaurantes) */}
    <Route path="/" element={<Home />} />

    {/* Caminho da página 2 (Lista de Produtos) */}
    <Route path="/perfil" element={<Profile />} />
  </Routes>
)

export default Rotas

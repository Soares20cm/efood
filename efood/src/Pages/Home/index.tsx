import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import ProductsList from '../../components/ProductsList'
import Footer from '../../components/Footer'
import Food from '../../Models/Food'
import { fetchRestaurants, Restaurant } from '../../services/api'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Food[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchRestaurants()
        const formattedData: Food[] = data.map((restaurant: Restaurant) => ({
          id: restaurant.id,
          category: restaurant.tipo,
          description: restaurant.descricao,
          image: restaurant.capa,
          infos: restaurant.destacado ? ['Destaque da semana', restaurant.tipo] : [restaurant.tipo],
          title: restaurant.titulo,
          rating: restaurant.avaliacao,
          highlighted: restaurant.destacado
        }))
        setRestaurantes(formattedData)
      } catch (error) {
        console.error('Erro ao carregar restaurantes:', error)
      } finally {
        setLoading(false)
      }
    }

    loadRestaurants()
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <Hero />
        <div style={{ textAlign: 'center', padding: '40px' }}>Carregando restaurantes...</div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <Hero />
      <ProductsList
        food={restaurantes}
        title=""
        background="beige"
      />
      <Footer />
    </>
  )
}

export default Home